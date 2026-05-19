<script setup>
    import { Notyf } from 'notyf';
    import api from '../api.js';

    const notyf = new Notyf();

    async function updateTaskStatus(id) {
        try {
            const response = await api.patch(`/tasks/${id}`);

            if(response.status === 200) {

                window.location.reload();

            } else {

                notyf.error("Task Update Failed. Please contact administrator.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Task Update Failed. Please contact administrator.");
        }
    }

    async function deleteTask(id) {
        try {
            const response = await api.delete(`/tasks/${id}`);

            if(response.status === 200) {

                window.location.reload();

            } else {
                notyf.error("Task Delete Failed. Please contact administrator.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Task Delete Failed. Please contact administrator.");
        }
    }
</script>

<script>
  	export default {
	    props: {
	      taskData: Object
	    }
    }
</script>

<template>
    <div class="col col-md-3">
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">{{ taskData.name }}</h5>

                <h6 class="card-subtitle mb-1">Description:</h6>
                <p class="card-text">{{ taskData.description }}</p>

                <h6 class="card-subtitle mb-1">Status:</h6>
                <p class="card-text">{{ taskData.status }}</p>
            </div>

            <div class="card-footer d-flex justify-content-around">
                <button class="btn btn-primary btn-sm" v-on:click="updateTaskStatus(taskData._id)">Update</button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteTask(taskData._id)">Delete</button>
            </div>
        </div>
    </div>
</template>