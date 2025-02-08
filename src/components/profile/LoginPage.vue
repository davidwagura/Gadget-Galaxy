<template>
	<div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-4">
		<div class="w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
			<h2 class="text-xl font-bold text-center mb-6">Login to Gadget Store</h2>
			<form @submit.prevent="loginForm">
				<div class="mb-4">
					<label class="block text-sm font-bold mb-2" for="email"> Email </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" id="email" v-model="data.email" type="email" placeholder="Enter your email">
				</div>
				<div class="mb-4">
					<label class="block text-sm font-bold mb-2" for="password"> Password </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" id="password" v-model="data.password" type="password" placeholder="Enter your password">
				</div>
				<div class="text-center mb-4">
					<p class="text-sm text-gray-600"> Don't have an account? <a href="/register" class="text-blue-500 hover:underline">Register</a>
					</p>
				</div>
				<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300" type="submit"> Login </button>
			</form>
			<div v-if="successMessage" class="mt-4 text-center text-green-500 font-semibold animate-pulse">
				{{ successMessage }}
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios' 

export default {

    name: 'LoginPage',

    data() {

        return {

            data: {

                email: '',

                password: '',

            },

            successMessage: '',

        };

    },

    methods: {

        loginForm() {

            axios.post('http://127.0.0.1:8000/api/login', this.data)

            .then(response => {

                console.log(response)

                this.successMessage = 'You have been successfully logged in!.';

                setTimeout(() => {

                this.successMessage = '';

                this.$router.push('/profile');

                }, 3000);                 
            })

            .catch(error => {

                console.error('Error logging in user:', error);

                this.successMessage = 'Failed to login.Try again.';
                
            });  

        }
    }
}
</script>