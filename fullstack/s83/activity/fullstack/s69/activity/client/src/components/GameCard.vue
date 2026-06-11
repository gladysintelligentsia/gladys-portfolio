<script setup>
    import { Notyf } from 'notyf';
    import api from '../api.js';
    import { useGlobalStore } from '../stores/global.js';

    const props = defineProps({
        gameData: Object
    });

    // Define the emit function to notify the parent
    const emit = defineEmits(['refresh']);

    const notyf = new Notyf();
    const { user } = useGlobalStore();

    async function updateGameStatus(id) {
        try {
            const response = await api.patch(`/games/${id}`, {}, {
                headers: { Authorization: `Bearer ${user.token}` }
            });

            if(response.status === 200) {
                emit('refresh'); // Silently refresh instead of full reload
            } else {
                notyf.error("Game Update Failed.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Game Update Failed.");
        }
    }

    async function deleteGame(id) {
        try {
            const response = await api.delete(`/games/${id}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            });

            if(response.status === 200) {
                emit('refresh'); // Silently refresh instead of full reload
            } else {
                notyf.error("Game Delete Failed.");
            } 
        } catch (e) {
            console.error(e);
            notyf.error("Game Delete Failed.");
        }
    }
</script>

<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">{{ gameData.name }}</h5>
            <h6 class="card-subtitle mb-1">Description:</h6>
            <p class="card-text">{{ gameData.description }}</p>
            <h6 class="card-subtitle mb-1">Status:</h6>
            <p class="card-text">{{ gameData.status }}</p>
        </div>

        <div class="card-footer d-flex justify-content-around">
            <button class="btn btn-primary btn-sm" @click="updateGameStatus(gameData._id)">Update</button>
            <button class="btn btn-danger btn-sm" @click="deleteGame(gameData._id)">Delete</button>
        </div>
    </div>
</template>