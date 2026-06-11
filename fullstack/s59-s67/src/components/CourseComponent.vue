<script>

    
    import { ref, watch } from "vue";
    import { Notyf } from 'notyf';
    import {useGlobalStore} from '../stores/global';// added s64 discussion
    const notyf = new Notyf();

    export default {  
        props: {
            courseData: Object
        },

        // refactor s64 discussion
        setup({ courseData }) {

            const {user} = useGlobalStore();

            return {
                user
            }
        }
    }
    
</script>
<!-- added s64 discussion -->
<template>
    <div class="col-md-4">
        <div id="CourseCard" class="cardHighlights card p-2 shadow-sm">
            <img 
                class="card-img-top"
                :src="`https://placehold.co/600x400/63c3ff/ffffff?font=raleway&text=${encodeURIComponent(courseData.name)}`"
                :alt="courseData.name"
                        >
            <div class="card-body fw-bold mb-2">
                <h4 class="card-title">
                    {{courseData.name}}
                </h4>
                <p class="card-text mt-3">
                    {{courseData.description}}
                </p>
                <p class="mb-1">
                    <span class="fw-semibold">
                        Price: PHP {{courseData.price}}
                    </span>
                </p>
               <!--  <p>
                    Enrollees: {{enrollees}}
                </p>
                <p>
                    Seats: {{seats}}
                </p> -->
                <div class="d-grid mt-3">
                    
                    <router-link class="btn btn-outline-primary d-block" 
                    :to="{ path: `/courses/${courseData._id}`}">
                        View Course
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
