<script>
  import BannerComponent from '../components/BannerComponent.vue';

  export default {
    components: {
      BannerComponent
    },
    data() {
      return {
        bannerProps: {
          title: "404 - Not Found",
          tagline: "Opportunities for Everyone, Everywhere!",
          destination: "Home",
          buttonLabel: "Back to Home"
        }
      }
    }
  }
</script>

<template>
  <div class="container-fluid">
    <BannerComponent :bannerProps=bannerProps />
  </div>
</template>

<style scoped>

</style>
