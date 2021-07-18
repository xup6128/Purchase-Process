import Vue from 'vue'
import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/normalize.css'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
