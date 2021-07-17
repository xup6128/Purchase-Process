import Vue from 'vue'
import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/normalize.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
