import Vue from "vue";
import VueRouter from "vue-router";
import VueMask from "v-mask";
import { VueMaskDirective } from "v-mask";
Vue.use(VueRouter);

const routes = [
  {
    path: "/product",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/ProductListView.vue"),
  },
  {
    path: "/product-detail/:id",
    name: "product-detail",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/ProductDetail.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.directive("mask", VueMaskDirective);

export default router;
