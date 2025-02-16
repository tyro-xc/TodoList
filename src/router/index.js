import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          redirect: "/welcome",
        },
        {
          path: "/testColor",
          name: "testColor",
          component: () => import("../components/testColor.vue"),
        },
        {
          path: "/testButton",
          name: "testButton",
          component: () => import("../components/testButton.vue"),
        },
        {
          path: "/welcome",
          name: "welcome",
          component: () => import("../components/welcome.vue"),
        },
        {
          path: "/TodoList",
          name: "TodoList",
          component: () => import("../components/TodoList.vue"),
        },
        {
          path: "/RandomGetName",
          name: "RandomGetName",
          component: () => import("../components/RandomGetName.vue"),
        },
        {
          path: "/debounce",
          name: "debounce",
          component: () => import("../components/debounce.vue"),
        },
        {
          path: "/SearchGithubName",
          name: "SearchGithubName",
          component: () => import("../components/SearchGithubName.vue"),
        },
        {
          path: "/abc",
          name: "abc",
          component: () => import("../views/testPinia/abc.vue"),
        },
        {
          path: "/list",
          component: () => import("../views/testPinia/List.vue"),
        },
        {
          path: "/search",
          component: () => import("../views/testPinia/Search.vue"),
        },
        {
          path: "/photos",
          name: "photos",
          component: () => import("../components/photos.vue"),
        },
        {
          path: "/testFloat",
          name: "testFloat",
          component: () => import("../components/testFloat.vue"),
        },
        {
          path: "/lyrics",
          name: "lyrics",
          component: () => import("../components/lyrics.vue"),
        },

        {
          path: "/iframe",
          name: "iframe",
          component: () => import("../components/iframe.vue"),
        },
        {
          path: "/table",
          name: "table",
          component: () => import("../components/table.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
