<script setup>
    import { watch, ref } from 'vue';
    import { Notyf } from 'notyf';
    import { useGlobalStore } from '../stores/global';
    import api from '../api';

    const notyf = new Notyf();

	const { getUserDetailed } = useGlobalStore();

    const email = ref("");
    const password = ref("");
    const isEnabled = ref(false);

    watch([email,password], (currentValue, oldValue) => {
        if(currentValue.every(input => input !== "")){
            isEnabled.value = true
        } else {
            isEnabled.value = false
        }
    });

    async function handleSubmit(){
        try {

            let res = await api.post('/users/login', {
                email: email.value,
                password: password.value
            })

            if(res.data.access){
                notyf.success("Login Successful");

                localStorage.setItem("token",res.data.access);

                getUserDetails(res.data.access);

                email.value = "";
		        password.value = "";
			}

        } catch(e) {

            if( e.response.status === 401 || e.response.status === 404 ){

                notyf.error(e.response.data.message);

            } else {

                console.error(e);
                notyf.error("Login Failed. Please contact administrator.");
            }
        }
    }
</script>

<template>
    <form v-on:submit.prevent="handleSubmit">
        <h1 class="my-5 text-center">Login</h1>

        <div class="mb-3">
            <label for="userEmail" class="form-label">Email address</label>
            <input 
                type="text"
                class="form-control"
                id="userEmail"
                placeholder="Enter email"
                v-model="email"
            />
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input 
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model="pass"
            >
        </div>

        <button type="submit" class="btn btn-primary btn-block"  v-if="isEnabled">Login</button>
        <button type="submit" class="btn btn-danger btn-block" disabled v-else>Login</button>
    </form>
</template>