import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores'
import * as ElementUI from 'element-ui'
import { services } from './services'

import './sw/registerServiceWorker'

import './assets/sass/App.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype = Object.assign(Vue.prototype, {
  ...services
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
