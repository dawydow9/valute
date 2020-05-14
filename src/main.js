import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import VueRouter from 'vue-router'
import {Vue2Storage} from 'vue2-storage'

Vue.use(VueRouter)
Vue.use(Vue2Storage, {
  prefix: '',
  driver: 'local',
  ttl: 0
})

new Vue({
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
