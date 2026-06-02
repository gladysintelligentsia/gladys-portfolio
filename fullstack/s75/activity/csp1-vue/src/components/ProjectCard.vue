<script setup>

	// Import the defineProps function from Vue.
    // This function allows a component to receive data from its parent component.
	import {defineProps} from 'vue';

	// defineProps() is used to receive data from a parent component
    // Parent Component: Projects.vue - contains the list of projects and passes each project's data to ProjectCard.vue.
    // Child Component: ProjectCard.vue - receives the project data through props and displays it.
	defineProps({
		// The "project" prop will contain the project data object
		project:Object
	})
	
</script>

<template>

	<div class="card col-md-3">
		<!-- Bind the image source dynamically using the project.image value -->
	    <img :src="project.image" class="card-img-top card-img" alt="...">
	    <div class="card-body">
	    <h5 class="card-title">{{project.title}}</h5>
	    <p class="card-text">
	        {{project.description}}
	    </p>
	    
	    </div>
	</div>
	
</template>

<style scoped>
	
</style>
