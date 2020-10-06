import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import thunder from "thunder-design"
Vue.use(thunder)

import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
