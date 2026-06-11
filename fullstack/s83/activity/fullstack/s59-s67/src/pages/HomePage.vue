<script>
  import BannerComponent from '../components/BannerComponent.vue';
  import HighlightsComponent from '../components/HighlightsComponent.vue';

  export default {
    components: {
      BannerComponent,
      HighlightsComponent
    },
    data() {
      return {
        bannerProps: {
          title: "Zuitt Course Booking System",
          tagline: "Opportunities for Everyone, Everywhere!",
          destination: "Courses",
          buttonLabel: "View Our Courses"
        }
      }
    }
  }
</script>

<template>
  <div class="container-fluid">
    <BannerComponent :bannerProps=bannerProps />
    <HighlightsComponent />
  </div>
</template>

<style scoped>

</style>
