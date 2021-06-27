import Vue from "vue";
import Vuex from "vuex";
import { CHANGE_USER } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: "",
  },

  mutations: {
    [CHANGE_USER](state, payload) {
      state.userData = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getUsername: (state) => state.userData,
  },
});
