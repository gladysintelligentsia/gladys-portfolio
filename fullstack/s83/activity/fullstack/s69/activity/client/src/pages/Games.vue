<script setup>
    import { reactive, watch, onBeforeMount } from 'vue';
    import { useGlobalStore } from '../stores/global.js';
    import { useRouter } from 'vue-router';
    import api from '../api.js';
    import GameCard from '../components/GameCard.vue';

    const { user } = useGlobalStore();
    const router = useRouter();
    const games = reactive({ data: [] });

    onBeforeMount(() => {
        if (!user.token) {
            router.push({ path: '/login' });
        }
    });

    // Extracted logic into a reusable function
    async function fetchGames() {
        try {
            if (!user.token) return;
            
            let { data } = await api.get('/games/all', {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            games.data = data.games || []; 
        } catch (error) {
            console.error("Error fetching games:", error);
            games.data = [];
        }
    }

    // Watches user changes and fetches data
    watch([user], () => {
        fetchGames();
    }, { immediate: true });
</script>

<template>
    <div class="container my-5">
        <h1 class="text-center mb-4">Games</h1>

        <div class="row mt-3" v-if="games.data.length > 0">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="game in games.data" :key="game._id">
                <GameCard :gameData="game" @refresh="fetchGames" />
            </div>
        </div>
        
        <div class="text-center mt-5" v-else>
            <h3>No Games Available</h3>
        </div>
    </div>
</template>