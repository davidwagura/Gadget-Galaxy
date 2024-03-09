import { createRouter, createWebHistory } from 'vue-router'
import NavigationPage from '../components/nav page/NavigationPage.vue'


const routes = [
    {
        path: '/',
        name: 'navigation-page',
        component: NavigationPage
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

