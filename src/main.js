import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//  引入element-ui
import '@/element/element'
import 'element-ui/lib/theme-chalk/index.css';

//  引入接口
import http from '@/api/request'
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
