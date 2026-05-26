<script>
  import { onBeforeMount } from 'vue';
  import { useGlobalStore } from "./stores/global";
  // Double-check your exact filename casing (AppNavbar.vue vs AppNavBar.vue)
  import NavbarComponent from "./components/AppNavbar.vue"; 

  export default {
    components: {
      NavbarComponent
    },
    setup(){
      const { getUserDetails } = useGlobalStore();

      onBeforeMount(() => {
        const token = localStorage.getItem("token");
        
        // FIXED: Only fetch details if a token actually exists!
        // This prevents the automatic 401 Unauthorized console error on load.
        if (token && token !== "undefined" && token !== "null") {
          getUserDetails(token);
        }
      });
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