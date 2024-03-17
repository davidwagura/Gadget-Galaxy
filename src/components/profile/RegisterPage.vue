<template>
    <div class="flex justify-center items-center h-screen">
        <form @submit.prevent ="submitForm" class="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 w-1/3">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" v-model="username" type="text" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" placeholder="Email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterPage',

    data() {
        return {
            username: '',
            email: '',
            password: '',
        };
    },

    methods: {
        submitForm() {
            axios.post('http://127.0.0.1:8000/api/student', this.data)
                .then(response => {
                    console.log(response.data);

                    // username: this.username
                    // email: this.email
                    // password: this.password
                });
                this.$router.push('/login')
        }

    }
}
</script>
