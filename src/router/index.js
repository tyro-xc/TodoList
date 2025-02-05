import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/components/Home.vue";
import confetti from "../views/confetti.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Confetti",
      component: confetti,
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
      path: "/confetti",
      name: "confetti",
      component: () => import("../views/confetti.vue"),
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
    {
      path: "/RandomGetName",
      name: "RandomGetName",
      component: () => import("../views/RandomGetName.vue"),
    },
    {
      path: "/debounce",
      name: "debounce",
      component: () => import("../views/debounce.vue"),
    },
    {
      path: "/SearchGithubName",
      name: "SearchGithubName",
      component: () => import("../views/SearchGithubName.vue"),
    },
    {
      path: "/abc",
      name: "abc",
      component: () => import("../views/abc.vue"),
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
      path:"/photos",
      name:"photos",
      component:()=>import("../views/photos.vue")
    },
  ],
});

export default router;
