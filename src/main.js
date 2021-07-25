import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store/index";
import AOS from "aos";
import "./store/subscribe";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import "@/material/material.js";
//
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
