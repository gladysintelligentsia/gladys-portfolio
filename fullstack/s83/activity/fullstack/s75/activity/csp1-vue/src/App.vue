<script setup>
import Navbar from './components/Navbar.vue';
import Banner from './components/Banner.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <div>
    <Navbar />
    <Banner />
    <Projects />
    <Contact />
    <FooterComponent />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
}
</style>