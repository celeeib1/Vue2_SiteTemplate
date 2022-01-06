import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Global 3rd party plugins
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/styles.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
