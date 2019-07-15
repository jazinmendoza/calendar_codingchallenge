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
      state.events.unshift(payload);
    }
  },
  getters: {
    getEvent: (state) => (date, weekday) => {
      return state.events.find(event => date >= event.startDate && date <= event.endDate 
              && event.weekdaysIndex.includes(parseInt(weekday)));
    }
  }
}