import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQrcodeReader from 'vue-qrcode-reader'
import loading from 'vuejs-loading-screen'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueQrcodeReader)
Vue.use(loading, {
  bg: '#41b883ad',
  icon: 'refresh',
  size: 3,
  icon_color: 'white'
})
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.prototype.$liff = window.liff

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
