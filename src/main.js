import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router';
import store from './store'

import 'normalize.css/normalize.css'  // A modern alternative to CSS resets
import './index.scss'                 // global css
// import './styles/index.scss'

import './icons'                      // icon

Vue.use(ElementUI);

Vue.config.productionTip = false

router.beforeEach((to, from, next) =>  {
  if (store.state.userInfo || to.path === "/login") {
    next();
  } else {
    next({
      path: "/login"
    })
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})


