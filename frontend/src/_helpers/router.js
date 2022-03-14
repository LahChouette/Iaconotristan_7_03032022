import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login'
import Signup from '../pages/Signup'

const routes = [

    { path: '/', component: Login},
    { path: '/signup', component: Signup},

    {path: '/:pathMatch(.*)*', redirect: '/'}

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})