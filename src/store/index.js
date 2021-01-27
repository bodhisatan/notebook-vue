import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list_: []
  },
  mutations: {
    addItem(state, val) {
      this.state.list_.push(val)
      console.log(this.state.list_)
    }
  },
  actions: {
  },
  modules: {
  }
})
