import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from "./views/Login";

Vue.use(VueRouter)

export const admin = [{
    path: '/admin',
    name: 'admin',
    component: () => import('./views/admin/Admin'),
}]

export const user = [{
    path: '/user',
    name: 'user',
    component: () => import('./views/user/User'),
}]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    // routes // (缩写) 相当于 routes: routes
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home'),
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./views/admin/Admin'),
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('./views/user/User'),
        }
    ]
})

export default router