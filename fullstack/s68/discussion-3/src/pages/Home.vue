<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col mt-5 pt-5 text-center mx-auto">
                <h1>Welcome to Task Management App</h1>
                <p>Create, Read, Update and Delete Tasks</p>
                <router-link class="btn btn-primary" :to="{name: 'Tasks'}">Check your tasks</router-link>
            </div>
        </div>
  </div>
</template>