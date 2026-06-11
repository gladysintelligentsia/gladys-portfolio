
<script setup>

    import {watch, ref, onBeforeMount} from 'vue';
    import { Notyf } from 'notyf';
    import {useGlobalStore} from '../stores/global';
    import {useRouter} from 'vue-router';

    import api from '../api.js'; //added s64 discussion


    const store = useGlobalStore();
    const getUserDetails = store.getUserDetails;
    const router = useRouter();
    
    // refactor s64 discussion
    const firstName = ref("");
    const lastName = ref("");
    const mobileNum = ref("");

    const email = ref("");
    const password = ref("");
    const confirmPass = ref("");
    const isEnabled = ref(false);

    
    const notyf = new Notyf();


    onBeforeMount(() => {
        if (store.user.email) {
            router.push({path: '/courses'})
        }
    })

    
    watch([email, password, confirmPass, firstName, lastName, mobileNum], (currentValue, oldValue) => {

        if (currentValue.every(input => input !=="") && currentValue[1] === currentValue[2]) {
            
            isEnabled.value = true;
        } else {
            
            isEnabled.value = false;
        }
    })

    // refactor s64 discussion
   async function handleSubmit(e) {
        
        e.preventDefault();

        try {
        // console.log(email.value);
        // console.log(password.value);
        // console.log(confirmPass.value);

        await api.post('/users/check-email', {
            email: email.value
        })

        let response = await api.post('/users/register', {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            mobileNo: mobileNum.value,
            password: password.value
        })

        if(response.status === 201) {

            notyf.success("Registration Succesful");

            firstName.value = "";
            lastName.value = "";
            mobileNum.value = "";
            email.value = "";
            password.value = "";
            confirmPass.value = "";

            router.push({path: '/login'});

           } else {
            notyf.error("Registration Failed. Please contact administrator.")
           }

        } catch(e) {
        // Check if the error status is 404, 401, 400, or 409.
                if( e.response.status === 404 || e.response.status === 401 || e.response.status === 400 || e.response.status === 409) {

                    // Display the error message returned from the backend API.
                    notyf.error(e.response.data.message);

                } else {
                    // Log unexpected errors in the console for debugging.
                    console.error(e);

                    // Display a default error message for unexpected errors.
                    notyf.error("Registration Failed. Please contact administrator.");
                }
        }
    }


    
</script>

<template>
    <div class="container-fluid">
        <h1 class="my-5 pt-3 text-primary text-center">Register Page</h1> 
        <div class="row d-flex justify-content-center">
            <div class="col-md-5 border border rounded-3 mx-auto p-5">
                <!-- refactor s64 discussion -->
                <form @submit="handleSubmit">
                    <!-- Update the registration form to add the additional input fields required by the User model for user registration. -->
                    <div class="mb-3">
                        <label for="fName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fName" v-model="firstName" />
                    </div>
                    <div class="mb-3">
                        <label for="lName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lName" v-model="lastName" />
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label">Mobile Number</label>
                        <input type="text" class="form-control" id="mobile" v-model="mobileNum" />
                    </div>
                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email Address</label>
                        
                        <input type="email" class="form-control" id="emailInput" v-model="email" />
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Password</label>
                        <input type="password" class="form-control" id="passwordInput" v-model="password" />
                    </div>
                    <div class="mb-3">
                        <label for="cpasswordInput" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="cpasswordInput" v-model="confirmPass" />
                    </div>
                    <div class="d-grid mt-5">
                        
                        <button type="submit" class="btn btn-primary btn-block" v-if="isEnabled">Submit</button>
                        
                        <button type="submit" class="btn btn-danger btn-block" v-else disabled>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    
</style>