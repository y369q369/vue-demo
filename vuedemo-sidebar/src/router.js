import Vue from 'vue';
import VueRouter from 'vue-router';
// import Layout from "./layout_hasRouter/Layout";
import Layout from "./layout_fullRouter/Layout";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',    // 去掉url中的#
    base: '/',
    // routes           // (缩写) 相当于 routes: routes
    routes: [
        {
            path: '/404',
            component: () => import('./views/404'),
            hidden: true
        },
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children:[{
                path: '/home',
                name: 'home',
                component: () => import('./views/Home'),
                meta: { title: 'home', icon: 'db' }
            }]
        },
        {
            path: '/component',
            component: Layout,
            redirect: '/component/svgView',
            name: 'component',
            meta: { title: 'component', icon: 'profession' },
            children:[
                {
                    path: '/component/social',
                    name: 'svgView',
                    component: () => import('./views/component/SvgView'),
                    meta: { title: 'svgView'}
                },
                {
                    path: '/component/jsonEdit',
                    name: 'jsonEdit',
                    component: () => import('./views/component/JsonEdit'),
                    meta: { title: 'jsonEdit'}
                },
            ]
        },
        {
            path: '/test',
            component: Layout,
            redirect: '/test/test2',
            name: 'test',
            meta: { title: 'test', icon: 'profession' },
            children: [
                {
                    path: '/test/test1',
                    name: 'test1',
                    component: () => import('./views/test/Test1'),
                    meta: { title: 'test1'}
                },
                {
                    path: '/test/test2',
                    name: 'test2',
                    component: () => import('./views/test/Test2'),
                    meta: { title: 'test2'}
                },
                {
                    path: '/test/test3',
                    name: 'test3',
                    component: () => import('./views/Test'),
                    meta: { title: 'test3'}
                },
            ]
        },
        {
            path: '/show',
            component: Layout,
            redirect: '/show/showContent',
            name: 'Schema',
            meta: { title: 'schema', icon: 'schooling' },
            children: [
                {
                    path: '/show/showContent',
                    name: 'showContent',
                    component: () => import('./views/show/ShowContent'),
                    meta: { title: 'showContent'}
                },
                {
                    path: '/show/showResult',
                    name: 'showResult',
                    component: () => import('./views/show/ShowResult'),
                    meta: { title: 'showResult'}
                },
            ]
        },
        // 404 page must be placed at the end !!!
        { path: '*', redirect: '/404', hidden: true }
    ]
})

export default router