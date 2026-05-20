<script>
    import { reactive, watch, onBeforeMount } from 'vue';
    import { useGlobalStore } from '../stores/global.js';
	import api from '../api.js';
    import GameCard from '../components/GameCard.vue';

    export default {
        components:{
            GameCard
        }, setup() {
            const { user } = useGlobalStore();

            const games = reactive({data:[]})
            
            onBeforeMount(() => {
                if(!user.token){
                    router.push({path: '/login'})
                }
            })
            
            watch([user], async () => {
                let { data } = await api.get('/games/all');
                games.data = data.tasks;
            }, { immediate: true })

            return {
                games,
                user
            }
        }
    }
</script>

<template>
	<h1 class="text-center mt-5">Games</h1>

    <div class="row mt-3">
        <GameCard v-for="game in games.data" :gameData="task" />
    </div>
</template>