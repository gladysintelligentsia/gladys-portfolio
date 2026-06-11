<script setup>
    import { onBeforeMount, reactive } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import api from "../api";
    import {useGlobalStore} from '../stores/global';
    import { Notyf } from 'notyf';

    // useRouter() - creates the router object for redirecting users after login
    const router = useRouter();

    // user - gets the shared reactive user data from the store
    const { user } = useGlobalStore();

    // Create an instance of Notyf to display popup notification
    const notyf = new Notyf();

    const course = reactive({ data: null });


    async function handleEnroll(){ 

        // Sends a POST request to the enrollment API to enroll the logged-in user into the selected course.
        let { data } = await api.post(`/enrollments/enroll`, {
                
                // courseId - retrieves the selected course id from the reactive course object.
                enrolledCourses: [
                    {
                        courseId: course.data._id
                    },
                ],
                // totalPrice - retrieves the price of the selected course.
                totalPrice: course.data.price
            })
        
        // data.success - checks if the enrollment request was successful.
        if(data.success === true){

            // notyf.success() - displays a success notification message.
            notyf.success("Course Enrolled!")

            // router.push() - redirects the user to another page.
            // path: '/courses' - redirects the user back to the Courses page.
            router.push({path: '/courses'});

        } else {

            // notyf.error() - displays an error notification message if enrollment fails.
            notyf.error("Enrollment Failed")
        }
    }

    onBeforeMount(async () => {

            const route = useRoute();

            let { data } = await api.get(
                `/courses/specific/${route.params.id}`
            );

            course.data = data;
        })
</script>

<template>
    <div class="container">
        <div class="row mx-auto my-3 gap-4 gap-md-0">

            <div class="col-md-6">
                <!-- :src - Vue directive shorthand for v-bind:src -->
                <!-- Dynamically binds the image source URL (https://placehold.co/600x400/63c3ff/ffffff?font=raleway&text) -->
                <!-- ${} - JavaScript template literal syntax used to insert dynamic values -->
                <!-- encodeURIComponent() - converts special characters into a URL-safe format -->
                <!-- courseData.name - displays the course name inside the generated image -->
                <!-- :alt - dynamically binds the alt attribute -->
                <!-- alt - alternative text shown if the image cannot load -->
                <img
                    class="img-fluid rounded"
                    :src="`https://placehold.co/600x400/63c3ff/ffffff?font=raleway&text=${encodeURIComponent(course.data.name)}`"
                    :alt="course.data.name"
                />
            </div>

            <div class="col-md-6">
                <div class="d-flex gap-2 text-primary">
                    <!-- bi-mortarboard - Bootstrap Icons class that displays a mortarboard/graduation cap icon -->
                    <h1 class="bi bi-mortarboard"></h1>
                    <h1 class="mb-3">{{ course.data.name }}</h1>
                </div>

                <h6>Course Description:</h6>

                <p class="text-muted">
                    {{ course.data.description }}
                </p>

                <p>
                    Price: PHP {{ course.data.price }}
                </p>

                <button class="btn btn-primary" type="button" v-if="user.email && !user.isAdmin" @click="handleEnroll">
                                    Enroll
                </button>

                <!-- btn-danger - Bootstrap class that applies a red danger button design -->
                <!-- v-if="user.email && user.isAdmin" - displays the button only if the logged-in user is an admin -->
                <!-- disabled - prevents the button from being clicked -->
                <button class="btn btn-danger" type="button" v-if="user.email && user.isAdmin" disabled>
                    Admin are not allowed to enroll
                </button>

                <!-- to="/login" - redirects the user to the Login page -->
                <!-- v-if="!user.email" - displays the button only if the user is not logged in -->
                <router-link to="/login" class="btn btn-outline-danger" type="button" v-if="!user.email">
                    Login to Enroll
                </router-link>
            </div>

        </div>
    </div>
</template>