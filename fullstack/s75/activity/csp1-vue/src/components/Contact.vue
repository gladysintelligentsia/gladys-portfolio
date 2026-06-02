<script setup>
import { Notyf } from 'notyf';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const notyf = new Notyf();

const name = ref("");
const email = ref("");
const message = ref("");
const isLoading = ref(false);

// Web3Forms Access Key used to authenticate form submissions.
const WEB3FORMS_ACCESS_KEY = "91c0b0e7-58c2-48d8-a99c-f04255e380e5"; 

// Email subject that will appear when a form submission is received.
const subject = "New message from Portfolio Contact Form";

// Google reCAPTCHA v2 Site Key
const SITE_KEY = '6LcySgctAAAAAG39ijQWxZ3P9AqcGre6tWT3EC71';  
const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref('');

// The submitForm() function handles the contact form submission.
const submitForm = async () => {

	// Ensure the user completes the reCAPTCHA challenge before submitting
	if (!recaptchaToken.value) {
		notyf.error('Please verify that you are not a robot');
		return;
	}

	// While the email is being sent, disable the button and change its text to "Sending..."
	isLoading.value = true;

	try {
		// fetch() API sends HTTP requests to Web3Forms server.
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				access_key: WEB3FORMS_ACCESS_KEY,
				subject: subject,
				name: name.value,
				email: email.value,
				message: message.value,
				"recaptcha_response": recaptchaToken.value // Sends the token to Web3Forms to verify
			})
		});

		const result = await response.json();

		if (result.success) {
			console.log(result);
			notyf.success("Message Sent!");
			// Clear the inputs
			name.value = "";
			email.value = "";
			message.value = "";
		} else {
			notyf.error("Failed to verify or send message.");
		}
	} catch (error) {
		console.log(error);
		notyf.error("Failed to send message.");
	} finally {
		isLoading.value = false;
		resetRecaptcha();
	}
};

/* reCAPTCHA Integration helper blocks */
function onRecaptchaSuccess(token) {
	recaptchaToken.value = token;
}

function onRecaptchaExpired() {
	recaptchaToken.value = '';
}

function renderRecaptcha() {
	if (!window.grecaptcha || !SITE_KEY) return;

	recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
		sitekey: SITE_KEY,
		size: 'normal',
		callback: onRecaptchaSuccess,
		'expired-callback': onRecaptchaExpired,
	});
}

function resetRecaptcha() {
	if (recaptchaWidgetId.value !== null && window.grecaptcha) {
		window.grecaptcha.reset(recaptchaWidgetId.value);
		recaptchaToken.value = '';
	}
}

onMounted(() => {
	const interval = setInterval(() => {
		if (window.grecaptcha && window.grecaptcha.render) {
			renderRecaptcha();
			clearInterval(interval);
		}
	}, 100);

	onBeforeUnmount(() => {
		clearInterval(interval);
	});
}); 
</script>

<template>
	<h1 class="text-center my-4 pt-5" id="contact">Contact</h1>
	<div class="contact-section container">
		<div class="row align-items-center mt-4">
			<div class="col-md-6 map-container mb-4 mb-md-0">
				<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Manila&t=&z=13&ie=UTF-8&iwloc=&output=embed" width="100%" height="400" frameborder="0" scrolling="no"></iframe>
			</div>
			
			<div class="col-md-6">
				<form @submit.prevent="submitForm" class="p-4 shadow-sm rounded bg-white">
					<div class="mb-3">
						<label for="user-fullname" class="form-label d-none">Full Name</label>
						<input type="text" id="user-fullname" v-model="name" class="form-control contact-form-control" placeholder="First Name M.I. Last Name" required>
					</div>
					<div class="mb-3">
						<label for="user-email" class="form-label d-none">Email Address</label>
						<input type="email" id="user-email" v-model="email" class="form-control contact-form-control" placeholder="Email" required>
					</div>
					<div class="mb-3">
						<label for="user-message" class="form-label d-none">Message</label>
						<textarea id="user-message" class="form-control contact-form-control" v-model="message" rows="6" placeholder="Message" required></textarea>
					</div>
					
					<div class="d-flex justify-content-start mb-3">
						<div ref="recaptchaContainer"></div>
					</div>

					<div class="form-footer d-flex justify-content-between align-items-center flex-wrap gap-2">
						<div class="social-icons d-flex gap-3 fs-4">
							<a href="https://www.linkedin.com/" target="_blank" id="linkedin" class="text-secondary"><i class="fab fa-linkedin"></i></a>
							<a href="https://github.com/gladysintelligentsia" target="_blank" id="github" class="text-secondary"><i class="fab fa-github"></i></a>
						</div>
						<button type="submit" class="btn btn-primary px-5 py-2 submit-btn" :disabled="isLoading">
							{{ isLoading ? "Sending..." : "Submit" }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	</template>

<style scoped>
.contact-form-control {
	padding: 12px;
	border-radius: 6px;
}
.submit-btn {
	border-radius: 6px;
	font-weight: 500;
}
</style>