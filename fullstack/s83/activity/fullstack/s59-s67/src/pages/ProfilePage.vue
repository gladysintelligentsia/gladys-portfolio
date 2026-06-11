<script setup>
import { useGlobalStore } from '../stores/global';
const store = useGlobalStore();
</script>

<template>
    <div class="container">
        <h1 class="my-5 pt-3 text-primary text-center">Profile Page</h1>

        <div class="row justify-content-center">
            <div class="col-md-5 border rounded p-5">
                <h2> Juan Dela Cruz </h2>
                <hr>

                <h4>Contacts</h4>
                <ul>
                    <li>Email: JuanDelaCruz@mail.com</li>
                    <li>Mobile No: 09123456789</li>
                </ul>
            </div>
        </div>
    </div>
</template>