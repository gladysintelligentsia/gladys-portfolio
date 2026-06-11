import {defineStore} from 'pinia';
import {reactive} from 'vue';
import axios from 'axios';
export const useGlobalStore = defineStore('global', () => {

	let user = reactive({
		token: localStorage.getItem('token'), //s64 discussion
	    email: null,
	    isAdmin: null,
	    firstName: null,
	    lastName: null,
	    mobileNo: null
	});

	// refactor s64 discussion
	async function getUserDetails(token) {
	    // user.email = email;
	    // user.firstName = localStorage.getItem("firstName");
	    // user.lastName = localStorage.getItem("lastName");
	    // user.mobileNo = localStorage.getItem("mobileNo");

	   

	    if (!token) {
	    	user.token = null;
	    	user.email = null;
	    	user.isAdmin = null;

	    	return;

	    }

	    let {data} = await axios.get(`${import.meta.env.VITE_COURSE_BOOKING_API}/users/details`, {
	    	headers: {
	    		Authorization: `Bearer ${token}`
	    	}
	    })

	    user.token = token;
	    user.email = data;
	    user.isAdmin = data.isAdmin;
	}

	return {
		user,
		getUserDetails
	}
})