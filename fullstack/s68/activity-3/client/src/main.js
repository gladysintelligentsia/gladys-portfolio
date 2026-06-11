import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "notyf/notyf.min.css";
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'

import HomePage from "./pages/Home.vue";
import RegisterPage from "./pages/Register.vue";
import LoginPage from "./pages/Login.vue";
import LogoutPage from "./pages/Logout.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/register",
            name: "Register",
            component: RegisterPage,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginPage,
        },
        {
            path: "/logout",
            name: "Logout",
            component: LogoutPage,
        }
    ]
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
