<template>
  <section id="projects" class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">My Projects</h2>
      <div class="row g-4">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';

const projects = [
  { title: 'E-commerce API', description: 'Dynamic E-Commerce Workflow Management.', image: '/images/ecommerce-api.png' },
  { title: 'Course Booking API', description: 'RESTful API Features.', image: '/images/course-api.png' },
  { title: 'Course Booking App', description: 'MERN-stack system.', image: '/images/course-app.png' },
  // Ensure these images are actually inside your 'public/images/' folder
];
</script>