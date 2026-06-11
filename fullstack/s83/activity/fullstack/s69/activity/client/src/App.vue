<script>
  import { onBeforeMount } from 'vue';
  import { useGlobalStore } from "./stores/global";
  import NavbarComponent from './components/NavbarComponent.vue'; // Changed name to match registration

  export default {
    components: {
      NavbarComponent // Now this matches the import perfectly!
    },
    setup(){
      const { getUserDetails } = useGlobalStore();

      onBeforeMount(() => getUserDetails(localStorage.getItem("token")));
    }
  }
</script>

<template>
  <NavbarComponent />
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>