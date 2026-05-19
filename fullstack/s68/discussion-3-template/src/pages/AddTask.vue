<script setup>
    import { watch, ref, onBeforeMount } from 'vue';
    import { Notyf } from 'notyf';
    import { useRouter } from 'vue-router';
    import { useGlobalStore } from '../stores/global.js';
    import api from '../api.js';

    const name = ref("");
    const description = ref("");
    const isEnabled = ref(false);

    const notyf = new Notyf();

    const router = useRouter()

    const { user } = useGlobalStore();

    watch([name,description], (currentValue, oldValue) => {
        if(currentValue.every(input => input !== "")){
            isEnabled.value = true
        } else {
            isEnabled.value = false
        }
    });

    async function handleSubmit(){
        try {
            let response = await api.post('/tasks/', {
                name: name.value,
                description: description.value
            })

            if(response.status === 201) {

                notyf.success("Task added successfully");

                name.value = "";
                description.value = "";

                router.push({path: '/tasks'})

            } else {
                notyf.error("Task Creation Failed. Please contact administrator.");
            }

        } catch (e) {
            console.error(e);
            notyf.error("Task Creation Failed. Please contact administrator.");
        }
    }

    onBeforeMount(() => {
        if(!user.token){
            router.push({path: '/'})
        }
    })
</script>

<template>
    <h1 class="my-5 text-center">Add Task</h1>

    <form v-on:submit.prevent="handleSubmit">
        <div class="mb-3">
            <label for="taskName" class="form-label">Name</label>
            <input 
                type="text" 
                id="taskName" 
                class="form-control" 
                placeholder="Enter Name" 
                v-model="name"
            >
        </div>

        <div class="mb-3">
            <label for="taskDescription" class="form-label">Description</label>
            <input 
                type="text" 
                id="taskDescription" 
                class="form-control" 
                placeholder="Enter Description" 
                v-model="description"
            >
        </div>

        <button type="submit" class="btn btn-primary my-4 w-100">Submit</button>
    </form>
</template>