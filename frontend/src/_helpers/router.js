import { createRouter, createWebHistory } from 'vue-router'
import authGuard from './auth-guard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Wall from '../pages/Wall'
import User from '../pages/User'

const routes = [

    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
    { path: '/wall', component: Wall, beforeEnter: authGuard},
    { path: '/user/me', component: User},

    {path: '/:pathMatch(.*)*', redirect: '/login'}

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})