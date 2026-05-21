<script setup>
    import { storeToRefs } from "pinia";
    import { useGlobalStore } from "../stores/global";

    const store = useGlobalStore();
    // Using storeToRefs preserves reactivity so login changes update the navbar instantly
    const { user } = storeToRefs(store);
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Inventory</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>

                    <router-link :to="{ name: 'Login' }" class="nav-link" v-if="!user?.email">Login</router-link>
                    <router-link :to="{ name: 'Registers' }" class="nav-link" v-if="!user?.email">Register</router-link>

                    <router-link :to="{ name: 'Logout' }" class="nav-link" v-else>Logout</router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>