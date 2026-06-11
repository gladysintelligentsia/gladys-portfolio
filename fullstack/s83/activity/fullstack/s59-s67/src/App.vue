<script>
  import NavbarComponent from './components/NavbarComponent.vue';
  
  import { useGlobalStore } from './stores/global';
  
  import { onBeforeMount } from 'vue';  

  export default {
    components: {
      NavbarComponent,
    },
    setup() {
      const {getUserDetails} = useGlobalStore();

      //refactor s64 discussion
      onBeforeMount(() => getUserDetails(localStorage.getItem('token'))
      );
    }
  }

</script>

<template>

  <NavbarComponent />
  <router-view />

</template>

<style scoped>


</style>