<template>
  <footer class="bg-dark text-white py-4 mt-5">
    <div class="container text-center">
      <p class="mb-0">&copy; {{ currentYear }} Gladys Ramos. All Rights Reserved.</p>
      <small>Built with Vue.js & Bootstrap 5</small>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

// Automatically update the year
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped>
footer {
  width: 100%;
}
</style>