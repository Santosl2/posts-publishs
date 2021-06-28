import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/Main.vue"),
  },
  {
    path: "/main",
    component: () => import("../components/Logged/Logged.vue"),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem("token")) {
      next();
      return;
    }
    next("/");
  } else {
    if (localStorage.getItem("token")) {
      next("/main");
      return;
    }
    next();
  }
});

export default router;
