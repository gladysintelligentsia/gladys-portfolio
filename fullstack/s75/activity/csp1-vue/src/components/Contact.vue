<script setup>
	import { Notyf } from 'notyf';
	import { ref } from 'vue';

	const notyf = new Notyf();

	const name = ref("");
	const email = ref("");
	const message = ref("");
	const isLoading = ref(false);

	// Web3Forms Access Key
	const WEB3FORMS_ACCESS_KEY = "91c0b0e7-58c2-48d8-a99c-f04255e380e5"; 

	// Email subject
	const subject = "New message from Gladys Ramos Portfolio";

	// The submitForm() function handles the contact form submission.
	const submitForm = async () => {
		isLoading.value = true;

		try {
			// Send HTTP request to Web3Forms API
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: subject,
					name: name.value,
					email: email.value,
					message: message.value,
					// The honeypot field is handled automatically by Web3Forms
				})
			});

			const result = await response.json();

			if (result.success) {
				isLoading.value = false;
				notyf.success("Message Sent!");
				
				// Clear form inputs on success
				name.value = "";
				email.value = "";
				message.value = "";
			} else {
				isLoading.value = false;
				notyf.error(result.message || "Failed to send message.");
			}
		} catch (error) {
			console.log(error);
			isLoading.value = false;
			notyf.error("Failed to send message.");
		}
	}
</script>

<template>
	<h1 class="text-center my-4 pt-5" id="contact">Contact Gladys Ramos</h1>
	<div class="contact-section container">
		<div class="row align-items-center mt-4">
			<div class="col-md-6 mb-4 mb-md-0 text-center">
				<div class="p-5 bg-light rounded shadow-sm">
					<h4>Let's Build Something Together!</h4>
					<p class="text-muted">Drop me a line or connect with me via my professional networks below.</p>
				</div>
			</div>
			<div class="col-md-6">
				<form @submit.prevent="submitForm">
					<!-- Honeypot Spam Protection -->
					<input type="checkbox" name="botcheck" class="hidden" style="display: none;">

					<div class="mb-3">
						<input type="text" id="firstName" v-model="name" class="form-control" placeholder="Name" required>
					</div>
					<div class="mb-3">
						<input type="email" id="email" v-model="email" class="form-control" placeholder="Email Address" required>
					</div>
					<div class="mb-3">
						<textarea id="message" class="form-control" v-model="message" rows="6" placeholder="Your Message" required></textarea>
					</div>
					<div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
						<div class="social-icons d-flex gap-3 fs-4">
							<a href="https://www.linkedin.com/in/gladysramos" target="_blank" id="linkedin"><i class="fab fa-linkedin"></i></a>
							<a href="https://git.zuitt.co/gladysintelligentsia" target="_blank" id="gitlab"><i class="fab fa-gitlab"></i></a>
							<a href="https://github.com/gladysintelligentsia" target="_blank" id="github"><i class="fab fa-github"></i></a>
						</div>
						<button type="submit" class="btn btn-primary px-4" :disabled="isLoading">
							{{ isLoading ? "Sending..." : "Submit" }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.social-icons a {
		color: #495057;
		transition: color 0.2s ease-in-out;
	}
	.social-icons a:hover {
		color: #0d6efd;
	}
</style>