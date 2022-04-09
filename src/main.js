import Vue from 'vue'
import App from './App.vue'
import './css/reset.css'
import './css/style.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
