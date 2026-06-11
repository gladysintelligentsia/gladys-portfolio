<script setup>
	import { onBeforeMount } from 'vue';
	import { useGlobalStore } from '../stores/global';
	import { useRouter } from 'vue-router';

    const router = useRouter();

	const { getUserDetails }  = useGlobalStore();

	onBeforeMount(()=>{
		localStorage.clear();
		getUserDetails(null);
		router.push({path: "/login"});
	})
</script>

<template>
</template>