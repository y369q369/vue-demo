import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from "./views/Login";
import Home from './views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    // routes // (缩写) 相当于 routes: routes
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }
    ]
})
