// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import mock from '@/mock'
import '@/assets/styles/reset.styl'
import '@/assets/styles/border.styl'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
