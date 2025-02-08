<template>
	<div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-4">
		<div class="w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
			<h2 class="text-xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
			<form @submit.prevent="submitForm">
				<div class="mb-4">
					<label class="block text-sm font-bold mb-2" for="username"> Username </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" id="username" v-model="data.username" type="text" placeholder="Enter your username">
				</div>
				<div class="mb-4">
					<label class="block text-sm font-bold mb-2" for="email"> Email </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" id="email" v-model="data.email" type="email" placeholder="Enter your email">
				</div>
				<div class="mb-4">
					<label class="block text-sm font-bold mb-2" for="password"> Password </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" id="password" v-model="data.password" type="password" placeholder="Enter your password">
				</div>
				<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" type="submit"> Register </button>
			</form>
			<div class="text-center mt-4">
				<p class="text-sm text-gray-600"> Already have an account? <a href="/login" class="text-blue-500 hover:underline">Login</a>
				</p>
			</div>
			<div v-if="successMessage" class="mt-4 text-center text-green-500 font-semibold animate-pulse">
				{{ successMessage }}
			</div>
		</div>
	</div>
</template>
<script>

import axios from 'axios';

export default {

    name: 'RegisterPage',

    data() {

        return {

            data: {

                username: '',

                email: '',

                password: '',

            },

            successMessage: '',
        };
    },

    methods: {

        submitForm() {

            axios.post('http://127.0.0.1:8000/api/register', this.data)

                .then(response => {

                    console.log(response.data);

                    this.successMessage = 'You have been successfully registered!.';

                    setTimeout(() => {

                    this.successMessage = '';

                    this.$router.push('/login');

                    }, 3000);                 

                })

                .catch(error => {

                console.error('Error adding user:', error);

                this.successMessage = 'Failed to register your details.Try again.';

            });  
            
        }

    }
}
</script>
