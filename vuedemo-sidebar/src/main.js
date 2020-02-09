import Vue from 'vue'
import App from './App.vue'

// 导入Vuex
import store from './store'

// 导入vue-router
import router from "./router";

// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入svg图标的自动加载设置
import '@/iconFonts'

// html5的新标准，覆盖原有html的样式
import 'normalize.css/normalize.css'
// 自定义全局的样式设置
import '@/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
