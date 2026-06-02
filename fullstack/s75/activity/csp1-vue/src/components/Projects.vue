<script setup>

	import projects from '../data/projects.json';
	import ProjectCard from './ProjectCard.vue';

	// computed() is used to create a value that is automatically updated whenever the data it depends on changes.
	import {computed} from 'vue';

	// Set the number of project cards to display in each row
	// Each row will contain up to 3 project cards
	const chunkSize = 3;

	const chunkedProjects = computed(() => {

		// Create an empty array that will store the grouped projects.
		const chunks = [];

		// After each loop, increase i by 3 (value of chunkSize)
		for (let i = 0; i < projects.length; i+= chunkSize) {

			// During the first loop: project.slice(0, 3) gets projects at indexes 0, 1, 2
			// During the second loop: project.slice(3, 6) gets projects at indexes 3, 4, 5
			chunks.push(projects.slice(i, i + chunkSize));
			console.log(chunks);
		}

		return chunks;

	})
	
</script>

<template>
	<!-- Start of My Projects -->
	<section class="pb-5" id="projects">
	    <h1 class="mt-5 mb-5 pb-4 text-center">My Projects</h1>
	    <!-- v-for="(group, index) in chunkedProjects"  -->
            <!-- v-for is used to loop through the chunkedProjects array. -->
            <!-- group represents the current group of projects. -->
            <!-- index represents the position of the current group in the array. -->
        <!-- :key="index"  -->
            <!-- :key helps Vue uniquely identify each group when rendering the list. -->
            <!-- Here, the group's index is used as the unique key. -->
	    <div
	    	v-for="(group, index) in chunkedProjects"
	    	:key="index"
	    	class="card-deck my-5 justify-content-center"
	    >
	    	<!-- v-for="project in group" -->
                <!-- Loop through each project in the current group. -->
            <!-- :key="project.id"  -->
                <!-- helps Vue track each ProjectCard when rendering the list -->
            <!-- :project="project" -->
                <!-- Pass the current project object to the ProjectCard component. -->
                <!-- The project prop will be received in ProjectCard.vue. -->
	    	<ProjectCard
	    		v-for="project in group"
	    		:key="project.id"
	    		:project="project"
	    	 />
	    	
	    </div>

	</section>
	<!-- End of My Projects -->
</template>

<style scoped>
	
</style>