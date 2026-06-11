<script setup>
    // Fixed: Changed 'refs' import to 'ref'
    import { watch, ref } from 'vue'; 
    import { Notyf } from 'notyf';
    import api from '../api.js';

    const email = ref("");
    const password = ref("");
    const confirmPass = ref("");
    const isEnabled = ref(false);

    const notyf = new Notyf();

    watch([email, password, confirmPass], (currentValue) => {
        if(currentValue.every(input => input !== "") && currentValue[1] === currentValue[2]){
            isEnabled.value = true;
        } else {
            isEnabled.value = false;
        }
    });

    async function handleSubmit(){
        try {
            let response = await api.post('/users/register', {
                email: email.value,
                password: password.value
            });

            if(response.status === 201) {
                notyf.success(response.data.message);
                email.value = "";
                password.value = "";
                confirmPass.value = "";
            } else {
                notyf.error("Registration Failed. Please contact administrator.");
            }
        } catch (e) {
            console.error(e);
            notyf.error("Registration Failed. Please contact administrator.");
        }
    }
</script>

<template>
    <form v-on:submit.prevent="handleSubmit">
        <h1 class="my-5 text-center">Register</h1>

        <div class="mb-3">
            <label for="registerEmail" class="form-label">Email</label>
            <input 
                type="email" 
                id="registerEmail" 
                class="form-control" 
                placeholder="Enter Email"
                v-model="email"
            />
        </div>

        <div class="mb-3">
            <label for="registerPassword" class="form-label">Password</label>
            <input 
                type="password" 
                id="registerPassword" 
                class="form-control" 
                placeholder="Enter Password" 
                v-model="password"
            />
        </div>

        <div class="mb-3">
            <label for="registerConfirmPassword" class="form-label">Confirm Password</label>
            <input 
                type="password" 
                id="registerConfirmPassword" 
                class="form-control" 
                placeholder="Confirm Password"
                v-model="confirmPass"
            />
        </div>

        <button type="submit" class="btn btn-primary btn-block" v-if="isEnabled">Register</button>
        <button type="submit" class="btn btn-danger btn-block" disabled v-else>Register</button>
    </form>
</template>