import Vue from 'vue'
import App from './App.vue'

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

new Vue({
  el: '#app',
  render: h => h(App)
})
