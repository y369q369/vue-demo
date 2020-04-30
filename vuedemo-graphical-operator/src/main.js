import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import utils from '@/global/utils'
Vue.prototype.Utils =utils

new Vue({
  render: h => h(App),
}).$mount('#app')
