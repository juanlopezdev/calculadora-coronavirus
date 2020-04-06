import Vue from 'vue'
import App from './App.vue'

var VueScrollTo = require('vue-scrollto');
var SocialSharing = require('vue-social-sharing');

Vue.use(VueScrollTo)
Vue.use(SocialSharing)

new Vue({
  el: '#app',
  render: h => h(App)
})
