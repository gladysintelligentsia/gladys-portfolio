import { defineStore } from 'pinia';
import { reactive } from 'vue';
import api from '../api';

export const useGlobalStore = defineStore('global',() => {
	
	let user = reactive({
		token: localStorage.getItem('token'),
		id: null,
		email: null,
	})

	async function getUserDetails(token){
	  	
		if(!token) {
			user.token = null;
			user.id = null
		  	user.email = null;

        	return;
    	}

        let { data } = await api.get('/users/details');
		user.token = token;
		user.id = data.user.id;
        user.email = data.user.email;
	}

	return {
		user,
		getUserDetails
	}
})