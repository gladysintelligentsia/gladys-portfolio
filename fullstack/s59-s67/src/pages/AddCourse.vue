<script setup>

	import {ref, watch, onBeforeMount} from 'vue';
	import {useRouter} from 'vue-router';
	import {useGlobalStore} from '../stores/global';
	import {Notyf} from 'notyf';
	import api from '../api.js';

	const router = useRouter();
	const store = useGlobalStore();
	const notyf = new Notyf();

	const name = ref("");
	const description = ref("");
	const price = ref("");
	const isEnabled = ref(false);

	onBeforeMount(() => {
		if (!store.user.token) {
			router.push({path: '/login'});
		}
	});

	watch([name, description, price], (currentValue) => {
		if (currentValue.every(input => input !== "")) {
			isEnabled.value = true;
		} else {
			isEnabled.value = false;
		}
	});

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			let response = await api.post('/courses', {
				name: name.value,
				description: description.value,
				price: price.value
			});

			if (response.status === 201) {
				notyf.success("Course added successfully!");

				name.value = "";
				description.value = "";
				price.value = "";

				router.push({path: '/courses'});
			}
		} catch (error) {
			if (error.response && (error.response.status === 400 || error.response.status === 401)) {
				alert(error.response.data.message);
			} else {
				alert("Failed to add course. Please try again.");
			}
		}
	}

</script>

<template>
	<div class="container-fluid">
		<h1 class="my-5 pt-3 text-primary text-center">Add Course</h1>
		<div class="row d-flex justify-content-center">
			<div class="col-md-5 border border rounded-3 mx-auto p-5">
				<form @submit="handleSubmit">
					<div class="mb-3">
						<label for="nameInput" class="form-label">Course Name</label>
						<input type="text" class="form-control" id="nameInput" v-model="name" />
					</div>
					<div class="mb-3">
						<label for="descInput" class="form-label">Description</label>
						<textarea class="form-control" id="descInput" v-model="description" rows="3"></textarea>
					</div>
					<div class="mb-3">
						<label for="priceInput" class="form-label">Price (PHP)</label>
						<input type="number" class="form-control" id="priceInput" v-model="price" />
					</div>
					<div class="d-grid mt-5">
						<button type="submit" class="btn btn-primary btn-block" v-if="isEnabled">Add Course</button>
						<button type="submit" class="btn btn-danger btn-block" v-else disabled>Add Course</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
