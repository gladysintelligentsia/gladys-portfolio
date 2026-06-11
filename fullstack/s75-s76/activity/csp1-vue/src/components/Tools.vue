<template>
  <section id="tools" class="py-5 bg-light">
    <div class="container text-center">
      <h2>Tools & Technologies</h2>
      <div class="row row-cols-2 row-cols-md-4 g-4 mt-4">
        <div class="col" v-for="tool in tools" :key="tool">
          <div class="p-3 border rounded shadow-sm bg-white">
            {{ tool }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tools = ref([
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'Vue.js',
  'Bootstrap',
  'Git',
  'Postman'
]);
</script>

<style scoped>
.col div {
  transition: transform 0.2s;
}
.col div:hover {
  transform: translateY(-5px);
  border-color: #000 !important;
}
</style>