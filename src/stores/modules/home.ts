const state = {
  id: 1
}

const actions = {
  setId (stores: any) {
    stores.state.id ++
    return stores.state.id
  }
}

const getters = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
