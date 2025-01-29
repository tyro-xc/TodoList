import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    // },
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
      path: "/confetti",
      name: "confetti",
      component: () => import("../views/confetti.vue"),
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
  ],
});

export default router;
