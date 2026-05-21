import { defineStore } from 'pinia';
import { reactive } from 'vue';
import api from '../api';

export const useGlobalStore = defineStore('global', () => {
    
    let user = reactive({
        token: localStorage.getItem('token'),
        email: null
    });

    async function getUserDetails(token) {
        
        if (!token) {
            user.token = null;
            user.email = null;
            return;
        }

        try {
            // 1. Attached the required Bearer token authorization header to the request
            let { data } = await api.get('/users/details', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            user.token = token;
            
            // 2. Added a safety check to read either data.user.email or data.email depending on your API structure
            user.email = data.user ? data.user.email : data.email;

        } catch (error) {
            console.error("Error fetching user details:", error);
            // If the token is invalid or expired, clear it out safely
            user.token = null;
            user.email = null;
            localStorage.removeItem('token');
        }
    }

    return {
        user,
        getUserDetails
    };
});