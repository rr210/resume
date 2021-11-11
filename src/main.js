import Vue from 'vue'
import App from './App.vue'
import './assets/css/snack.css'
import './assets/css/snack_pro.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
