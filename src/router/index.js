import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../components/profile/LoginPage.vue'

import RegisterPage from '../components/profile/RegisterPage.vue'

import AboutPage from '@/components/AboutPage.vue'

import ContactPage from '@/components/ContactPage.vue'
import HomePage from '@/components/HomePage.vue'

const routes = [

    { path: '/', component: HomePage },

    { path: '/login', component: LoginPage },

    { path: '/register', component: RegisterPage },

    { path: '/about', component: AboutPage },

    { path: '/contact', component: ContactPage },

]

const router = createRouter({

    history: createWebHistory(),

    routes,

})

export default router;

