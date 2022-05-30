export default {
  namespaced: true,
  state() {
    return {
      message: ''
    }
  },
  getters: {

  },
  mutations: {
    setState(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }  
    }
  },
  actions: {
    updateMessage({ commit }, message) {
      commit('setState', {
        message
      })
    }
  }
}
