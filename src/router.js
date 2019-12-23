import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from "./views/Login";

Vue.use(VueRouter)

export default new VueRouter({
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
        }
    ]
})
