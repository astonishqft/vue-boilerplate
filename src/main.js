import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import './permission' // 权限控制
import './core/lazy_use' // 组件的按需引入 use lazy load components
import './global.less' // 引入全局样式

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
