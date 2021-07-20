import Vue from 'vue'
import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/normalize.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store({
  state:{
    selected: 1
  },
  mutations:{
    changeSelected(state, opt){
      state.selected = opt;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
