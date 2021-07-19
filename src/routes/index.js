import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: () => import("../components/Main.vue"),
    meta: {
      title: "Social Media",
    },
  },
  {
    path: "/register",
    component: () => import("../components/Register.vue"),
    meta: {
      title: "Social Media",
    },
  },
  {
    path: "/main",
    component: () => import("../components/Logged/Logged.vue"),
    meta: {
      requireAuth: true,
      title: "Social Media",
      metaTags: [{
        name: "description",
        content: "fdfs",
      }, ],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.title)) {
    document.title = to.matched[0].meta.title;
  }

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta.metaTags);

  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );


  // Meta tags
  if (nearestWithMeta) {
    nearestWithMeta.meta.metaTags
      .map((tagDef) => {
        const tag = document.createElement("meta");

        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.

        tag.setAttribute("data-vue-router-controlled", "");

        return tag;
      })
      .forEach((tag) => document.head.appendChild(tag));
  }

  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem("token")) {
      if (store.getters["login/getUsername"] == "") {
        const fData = new FormData();
        fData.append("token", localStorage.getItem("token"));
        store.dispatch("login/tryUserReconnect", fData);
      }
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