import Vue from 'vue';
import Login from './Login.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Login),
}).$mount('#login')
