import Vue from 'vue'
import App from './app.vue'
import test from './test.vue'
Vue.component('test', test)
new Vue({
  el: '#app',
  render: h => h(App)
})
