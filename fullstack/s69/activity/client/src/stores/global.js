import { defineStore } from 'pinia';
import { reactive, onMounted } from 'vue'; // 1. Import onMounted
import api from '../api';

export const useGlobalStore = defineStore('global', () => {
    
    let user = reactive({
        token: localStorage.getItem('token'),
        email: null
    });

    // 2. Add an initialization function
    async function init() {
        if (user.token) {
            await getUserDetails(user.token);
        }
    }

    async function getUserDetails(token) {
        if (!token) {
            user.token = null;
            user.email = null;
            return;
        }

        try {
            let { data } = await api.get('/users/details', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            user.token = token;
            user.email = data.user ? data.user.email : data.email;
        } catch (error) {
            console.error("Error fetching user details:", error);
            user.token = null;
            user.email = null;
            localStorage.removeItem('token');
        }
    }

    // 3. Trigger init immediately so the user state is populated
    init();

    return {
        user,
        getUserDetails
    };
});