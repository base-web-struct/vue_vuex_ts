import Vue from 'vue'
import Vuex from 'vuex'
import { namespace } from 'vuex-class'

Vue.use(Vuex)
const files: any = require.context('./modules/', false, /\.ts$/)
const modules: any = {}

files.keys().forEach((item: string) => {
  const tmpKey: string = item.replace(/\.\//g, '').replace(/\.ts/g, '')
  modules[tmpKey] = files(item).default
})

export default new Vuex.Store({
  modules
})
