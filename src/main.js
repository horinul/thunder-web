import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


import animate from 'animate.css'
Vue.use(animate)


// import THMessage from "D:/UITest/thunder-design/packages/Message/index"
// Vue.use(THMessage)
import thunder from 'thunder-design'
Vue.use(thunder)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
