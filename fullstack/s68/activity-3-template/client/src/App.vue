<script>
  import { onBeforeMount } from 'vue';
  import { useGlobalStore } from "./stores/global";
  import NavbarComponent from "./components/AppNavBar.vue"; 

  export default {
    components: {
      NavbarComponent
    },
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
