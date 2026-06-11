<template>
  <section id="contact" class="py-5">
    <div class="container">
      <h2 class="text-center">Contact</h2>
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <form @submit.prevent="handleSubmit" class="p-4 border rounded shadow-sm">
            <input type="hidden" name="access_key" value="91c0b0e7-58c2-48d8-a99c-f04255e380e5">
            <input type="hidden" name="subject" value="New message from Gladys Ramos Portfolio">

            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" required>
            </div>
            
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" required>
            </div>
            
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" v-model="formData.message" rows="5" required></textarea>
            </div>
            
            <div class="d-flex align-items-center justify-content-between mt-4">
              <div class="social-links fs-4">
                <a href="https://www.linkedin.com/in/gladys-ramos" class="text-dark me-3" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/gladysintelligentsia" class="text-dark" target="_blank"><i class="fab fa-github"></i></a>
              </div>
              <button type="submit" class="btn btn-dark px-5">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

// Using reactive state to handle form inputs
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log("Form submitted with:", formData);
  // Web3Forms will handle the POST automatically due to the form action
  // You can add alert("Message sent!") here if desired
};
</script>

<style scoped>
.social-links a {
  transition: color 0.3s;
}
.social-links a:hover {
  color: #007bff !important; /* Optional: adds a hover effect */
}
</style>