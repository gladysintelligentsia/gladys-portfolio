<script>

  export default {
    props: {
      bannerProps: Object
    },
    mounted() {
      console.log(this.bannerProps.title);
      console.log(this.bannerProps.tagline);
    }
  }

</script>

<template>

  <div class="container-fluid">
    <div class="row mb-5 py-5" id="banner">
      <div class="col-md-10 p-5 m-5">
        <h1 class="mb-3" id="banner-title"> {{bannerProps.title}} </h1>
        <p class="mb-5" id="motto">
          {{bannerProps.tagline}}
        </p>
        <router-link class="btn btn-primary btn-lg rounded-pill px-3" :to="{ name: bannerProps.destination }">
        {{ bannerProps.buttonLabel }}
        <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>

  h1 {
    font-family: serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
  }

</style>