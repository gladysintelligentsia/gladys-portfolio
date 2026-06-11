
// Importing Bootstrap and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Import Notyf
import 'notyf/notyf.min.css';

// Imports the CSS file that contains global styles for the application
import './assets/main.css'

// Imports the createApp function from the Vue library that contains the logic for creating the Vue application
import { createApp } from 'vue'
import {createPinia} from 'pinia'
// Imports App.vue that contains the main layout where we place and organize components
import App from './App.vue'

// Import page components that will be used in the routing system
import HomePage from './pages/HomePage.vue';
import CoursesPage from './pages/CoursesPage.vue';
import NewsPage from './pages/NewsPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import LoginPage from './pages/LoginPage.vue';
import LogoutPage from './pages/LogoutPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import ErrorPage from './pages/ErrorPage.vue';
import ViewCourse from './pages/ViewCourse.vue';
import AddCourse from './pages/AddCourse.vue';


// Import routing functions from vue-router
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({

	history: createWebHistory(),

	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage
		},
		{
			path: '/courses',
			name: 'Courses',
			component: CoursesPage
		},
		{
			path: '/news',
			name: 'News',
			component: NewsPage
		},
		{
			path: '/register',
			name: 'Register',
			component: RegisterPage
		},
		{
			path: '/login',
			name: 'Login',
			component: LoginPage
		},
		{
			path: '/logout',
			name: 'Logout',
			component: LogoutPage
		},
		{
            path: '/profile',
		    name: 'Profile',
		    component: ProfilePage
        },
		{
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: ErrorPage
        },
		{
            path: '/courses/:id',
            component: ViewCourse
        },
        {
            path: '/addCourse',
            name: 'AddCourse',
            component: AddCourse
        }
	]
})


const app = createApp(App);

app.use(createPinia());

app.use(router);
app.mount('#app'); 