import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },

      {
        path: "/login",
        meta: { autenticado: true },
        component: () => import("pages/login.vue"),
      },
      {
        path: "/registrarse",
        meta: { autenticado: true },
        component: () => import("pages/registrarse.vue"),
      },
      {
        path: "/dashboard",
        meta: { autenticado: true },
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
