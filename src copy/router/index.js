import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import index from "@/views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/testColor",
      name: "testColor",
      component: () => import("../views/testColor.vue"),
    },
    {
      path: "/testButton",
      name: "testButton",
      component: () => import("../views/testButton.vue"),
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
    {
      path: "/confetti",
      name: "confetti",
      component: () => import("../views/confetti.vue"),
    },
  ],
});

export default router;
