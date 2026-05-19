<script>
  import { onBeforeMount } from 'vue';
  import { useGlobalStore } from "./stores/global";
  import NavbarComponent from './components/NavbarComponent.vue'; 
  import HomeComponent from './pages/Home.vue';

  export default {
    components: {
      HomeComponent,
      NavbarComponent
    }
    setup(){

      const { getUserDetails } = useGlobalStore();

      onBeforeMount(()=>getUserDetails(localStorage.getItem("token")))
    }
  }
</script>

<template>
  <NavbarComponent/>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>
