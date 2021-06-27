import Vue from "vue";
import App from "./App.vue";
import router  from "./routes/index";
import "@/material/material.js";

Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
