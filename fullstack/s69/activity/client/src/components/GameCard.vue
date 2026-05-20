<script setup>
    import { Notyf } from 'notyf';
    import api from '../api.js';

    const notyf = new Notyf();

    async function updateGameStatus(id) {
        try {
            const response = await api.patch(`/games/${id}`);

            if(response.status === 200) {

                window.location.reload();

            } else {

                notyf.error("Game Update Failed. Please contact administrator.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Game Update Failed. Please contact administrator.");
        }
    }

    async function deleteGame(id) {
        try {
            const response = await api.delete(`/games/${id}`);

            if(response.status === 200) {

                window.location.reload();

            } else {
                notyf.error("Game Delete Failed. Please contact administrator.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Game Delete Failed. Please contact administrator.");
        }
    }
</script>

<script>
  	export default {
	    props: {
	      gameData: Object
	    }
    }
</script>

<template>
    <div class="col col-md-3">
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">{{ gameData.name }}</h5>

                <h6 class="card-subtitle mb-1">Description:</h6>
                <p class="card-text">{{ gameData.description }}</p>

                <h6 class="card-subtitle mb-1">Status:</h6>
                <p class="card-text">{{ gameData.status }}</p>
            </div>

            <div class="card-footer d-flex justify-content-around">
                <button class="btn btn-primary btn-sm" v-on:click="updateGameStatus(gameData.id)">Update</button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteGame(gameData._id)">Delete</button>
            </div>
        </div>
    </div>
</template>