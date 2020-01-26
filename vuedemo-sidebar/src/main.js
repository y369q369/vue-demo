import Vue from 'vue'
import App from './App.vue'

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
  render: h => h(App),
}).$mount('#app')
