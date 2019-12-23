import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store/store'

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
  window.console.log(store.state);
  window.console.log(to);
  window.console.log(from);
  window.console.log(next);
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})


