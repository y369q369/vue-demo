import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'

// 定义全局变量，后面使用方式： this.变量名， 如 this.Axios
Vue.prototype.Axios = axios
Vue.prototype.Qs = qs

axios.defaults.baseURL = "/demo2"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
