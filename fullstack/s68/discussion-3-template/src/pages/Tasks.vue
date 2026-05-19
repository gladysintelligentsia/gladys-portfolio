<script>
    import { reactive, watch, onBeforeMount } from 'vue';
    import { useGlobalStore } from '../stores/global.js';
	import api from '../api.js';
    import TaskCard from '../components/TaskCard.vue';

    export default {
        components:{
            TaskCard
        }, setup() {
            const { user } = useGlobalStore();

            const tasks = reactive({data:[]})

            watch([user], async () => {
                let { data } = await api.get('/tasks/all');
                tasks.data = data.tasks;
            }, { immediate: true })

            return {
                tasks,
                user
            }
        }
    }

    onBeforeMount(() => {
        if(!user.token){
            router.push({path: '/login'})
        }
    })
</script>

<template>
	<h1 class="text-center mt-5">Tasks</h1>

    <div class="row mt-3">
        <TaskCard v-for="task in tasks.data" :taskData="task" />
    </div>
</template>