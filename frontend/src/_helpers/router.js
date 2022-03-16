import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Wall from '../pages/Wall'
import User from '../pages/User'

const routes = [

    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
    { path: '/wall', component: Wall},
    { path: '/user/me', component: User},

    {path: '/:pathMatch(.*)*', redirect: '/login'}

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})