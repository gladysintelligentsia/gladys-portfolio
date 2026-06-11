<script>

    
    // import coursesData from '../data/coursesData.js'
    import {watch, reactive, onBeforeMount} from 'vue';//added s64 discussion
    // import CourseComponent from '../components/CourseComponent.vue';
    import AdminView from '../components/AdminView.vue';
    import UserView from '../components/UserView.vue';
    import { useGlobalStore } from '../stores/global';
    import api from '../api.js'; //added s64 discussion
    export default {
        components: {
            // CourseComponent
            AdminView,
            UserView
        },
        
        setup() {

            const courses = reactive({data:[]});

            // onBeforeMount(async () => {
            //     let { data } = await api.get('/courses');
            //     courses.data = data;
            // })

            const {user} = useGlobalStore();

            watch(user, async (currentValue, oldValue) => {
                if(user.isAdmin){
                    let { data } = await api.get('/courses/all');
                    courses.data = data;
                }
                else {
                    let { data } = await api.get('/courses');
                    courses.data = data;
                }
            }, {
                immediate: true
            })
        
            return {
                courses,
                user
            }
        }
    }
</script>

<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col my-5">
                <h1 class="text-center text-primary py-1">Courses Offered</h1>
                <p class="text-center">Select a course to enroll in!</p>

            </div>
        </div>
        <div class="row g-4">

            <CourseComponent v-for="course in courses.data" :courseData="course" />
        </div>
    </div> -->

    <AdminView v-if="user.isAdmin" :coursesData="courses" />
    <UserView v-else :coursesData="courses" />
</template>

<style scoped>

</style>
