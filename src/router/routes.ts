import { RouteRecordRaw } from "vue-router";
import requiresAuth from "../boot/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",

    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "inicio",
        component: () => import("pages/IndexPage.vue"),
      },

      {
        path: "/login",
        component: () => import("pages/login.vue"),
      },
      {
        path: "/registrarse",
        component: () => import("pages/registrarse.vue"),
      },
      {
        path: "/dashboard",
        beforeEnter: requiresAuth,
        component: () => import("pages/dashboard.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
