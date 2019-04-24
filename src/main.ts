import Vue from 'vue'
import * as ElementUI from 'element-ui'
import lodash from 'lodash'
import jquery from 'jquery'
import echarts from 'echarts'
import Cookies from 'js-cookie'

import App from './App.vue'
import router from './routers/router'
import store from './stores'
import { services } from './services'
import Components from './components'
import './sw/registerServiceWorker'
import './assets/sass/App.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Components.init(Vue)

Vue.prototype = Object.assign(Vue.prototype, {
  ...services,
  _: lodash,
  $: jquery,
  echarts,
  cookies: Cookies
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
