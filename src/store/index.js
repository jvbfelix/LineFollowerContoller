import Vue from 'vue'
import Vuex from 'vuex'
import WebBluetoothModule from 'web-bluetooth-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('authtoken') || '',
    loading: false,
  },
  mutations: {
    loading: (state,t) => {
      state.loading = t
    }
  },
  actions: {
    loading (state,t) {
      this.commit('loading',t)
    },
  },
  getters: {
    loading: state => state.loading,
  },
  modules: {
    webBluetooth: WebBluetoothModule,
  }
})
