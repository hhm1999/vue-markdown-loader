import Vue from 'vue'
import App from './app.vue'
import demoContainer from './demoContainer.vue'
Vue.component('demoContainer', demoContainer)
new Vue({
  el: '#app',
  render: h => h(App)
})
