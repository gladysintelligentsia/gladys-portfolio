<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#landing">GR Portfolio</a>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            <a class="nav-link" :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Keeping links in an array makes it easy to add more pages later
const navLinks = ref([
  { name: 'Home', url: '#landing' },
  { name: 'Projects', url: '#projects' },
  { name: 'Tools', url: '#tools' },
  { name: 'Contact', url: '#contact' }
]);
</script>

<style scoped>
/* Optional: Add custom hover styles here */
.nav-link:hover {
  color: #f8f9fa !important;
}
</style>