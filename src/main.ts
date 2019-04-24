import Vue from 'vue'
import App from './entry/index.vue'
import router from './routers/router'
import store from './stores'
import * as ElementUI from 'element-ui'
import { services } from './services'
import Components from './components'
import './sw/registerServiceWorker'

import './assets/sass/App.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Components.init(Vue)

Vue.prototype = Object.assign(Vue.prototype, {
  ...services
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
