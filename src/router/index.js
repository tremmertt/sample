import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/views/ServiceView.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/views/NewsView.vue"),
  },
  {
    path: "/hiring",
    name: "Hiring",
    component: () => import("@/views/HiringView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/ContactView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
