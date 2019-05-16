const state = {
  id: 1
}

const actions = {
  set_id (stores: any): any {
    stores.state.id ++
    return stores.state.id
  }
}

const getters = {
  get_id (state: any): string {
    return state.id
  }
}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
