export default {
  state: {
    events: []
  },
  actions: {
    ['SET_EVENTS']({commit}, payload){
      commit('SET_EVENTS', payload)
    }
  },
  mutations: {
    ['SET_EVENTS'](state, payload){
      state.events.push(payload);
    }
  }
}