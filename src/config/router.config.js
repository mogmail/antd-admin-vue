import { createRouter, createWebHashHistory } from 'vue-router'
import BlankLayout from '@/views/layouts/BlankLayout'
// import Layout from '@/views/layouts/Layout'

const routes = [
    {
        path: '/',
        name: 'index',
        component: BlankLayout,
        // component: Layout,
        redirect: '/Login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login')
    },
    {
        path: '/home',
        name: 'home',
        component: BlankLayout,
        // component: Layout,
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