import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/components/index.vue"),
    },
    {
      path: "/author",
      component: () => import(""),
    },
    {
      path: "/character",
      component: () => import("@/components/CharactIntro.vue"),
    },
    {
      path: "/interaction",
      component: () => import(""),
    },
    {
      path: "/media",
      component: () => import(""),
    },
    {
      path: "/news",
      component: () => import(""),
    },
    {
      path: "/website",
      component: () => import(""),
    },
    {
      path: "/admin_login",
      component: () => import("@/components/admin-login.vue"),
    },
    {
      path: "/admin",
      component: () => import("@/views/admin.vue"),
      children: [
        {
          path: "/admin",
          component: () => import("@/components/admin/index.vue"),
        },
      ],
    },
  ],
});

export default router;
