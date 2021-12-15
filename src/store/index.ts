import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state 就是 data
  state: {
    count: 0
  },
  // mutations 就是 methods
  mutations: {
    increment(state, n: number) {
      state.count += n;
    }
  }
});

export default store;
