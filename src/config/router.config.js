import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/Layout'

const routes = [
    {
        path: '/',
        name: 'index',
        component: Layout,
        redirect: '/Login'
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('@/views/Login')
    // },
    {
        path: '/home',
        name: 'home',
        component: Layout,
        redirect: '/welcome',
        children: [{
            path: '/welcome',
            name: 'welcome',
            component: () => import('@/views/Welcome')
        }]
    }
]

// 存在token，验证权限问题

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})