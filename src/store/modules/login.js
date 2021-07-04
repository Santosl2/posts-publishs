import { API } from "../../resources/axios";
import { CHANGE_USER } from "../mutation-types";

const state = () => ({
  userData: "",
});

const getters = {
  getUsername: (state) => state.userData,
  isLoggedIn: (state) => state.userData != "",
};

const actions = {
  tryUserLogin({ commit }, user) {
    return new Promise((resolve, reject) => {
      API.post("/auth/login", user)
        .then((response) => {
          if (!response.data.message) {
            reject(response.data);
          }  

          const user = [response.data.user, response.data.access_token];
          commit(CHANGE_USER, user);

          localStorage.setItem("token", user[1]);
          API.defaults.headers.common["Authorization"] = user[1];
          resolve(response);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  tryUserReconnect({ commit }, token) {
    return new Promise((resolve, reject) => {
      API.post("/auth/tryReconnect", token)
        .then((response) => {
          let arr = {
            email: response.data.email,
            username: response.data.username,
          };
          const user = [arr, token.get("token")];
          commit(CHANGE_USER, user);
          resolve(response);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
};

const mutations = {
  [CHANGE_USER](state, payload) {
    state.userData = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
