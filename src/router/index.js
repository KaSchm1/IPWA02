import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Help from "../pages/Help.vue";
import Datenschutz from "../pages/Datenschutz.vue";
import Impressum from "../pages/Impressum.vue";

const routes = [
  {
    meta: {
      title: "WORDOF KLIMAWANDEL",
    },
    path: "/",
    name: "home",
    component: Home,
  },
  {
    meta: {
      title: "WORDOF KLIMAWANDEL",
    },
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    // Document title tag -  Kombination aus defaultDocumentTitle und `src/main.js` on router.afterEach hook
    meta: {
      title: "Impressum",
    },
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    // Document title tag - Kombination aus defaultDocumentTitle und `src/main.js` on router.afterEach hook
    meta: {
      title: "Datenschutz",
    },
    path: "/datenschutz",
    name: "Datenschutz",
    component: Datenschutz,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
