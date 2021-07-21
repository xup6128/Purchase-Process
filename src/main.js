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
    selected: 0,
    Name: "",
    LastName: "",
  },
  mutations:{
    changeSelected(state, opt){
      state.selected = opt;
    },
    setName(state, arr){
      state.Name = arr[0].value;
      state.LastName = arr[1].value;
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
