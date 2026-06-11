<script>

    import api from '../api';
    import {ref, reactive, onMounted, onBeforeMount} from 'vue';

    import CourseComponent from '../components/CourseComponent.vue';

    export default {
        props: {
            coursesData: Object
        },
        components: {
            CourseComponent
        },
        setup() {
            return {
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col my-5">
                <h1 class="text-center text-primary py-1">Courses Offered</h1>
                <p class="text-center">Select a course to enroll in!</p>
            </div>
        </div>
        <div class="row g-4">

            <CourseComponent v-for="course in coursesData.data" :courseData="course" />
        </div>
    </div>
</template>

<style scoped>

</style>
