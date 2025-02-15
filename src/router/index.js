import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// import Home from "@/components/Home.vue";
import confetti from "../components/confetti.vue";

const router = createRouter({
  history: createWebHashHistory(
    import.meta.env.BASE_URL
  ),
  routes: [
    {
      path: "/",
      name: "Confetti",
      component: confetti,
    },
    {
      path: "/testColor",
      name: "testColor",
      component: () =>
        import(
          "../components/testColor.vue"
        ),
    },
    {
      path: "/testButton",
      name: "testButton",
      component: () =>
        import(
          "../components/testButton.vue"
        ),
    },
    {
      path: "/confetti",
      name: "confetti",
      component: () =>
        import("../components/confetti.vue"),
    },
    {
      path: "/TodoList",
      name: "TodoList",
      component: () =>
        import("../components/TodoList.vue"),
    },
    {
      path: "/RandomGetName",
      name: "RandomGetName",
      component: () =>
        import(
          "../components/RandomGetName.vue"
        ),
    },
    {
      path: "/debounce",
      name: "debounce",
      component: () =>
        import("../components/debounce.vue"),
    },
    {
      path: "/SearchGithubName",
      name: "SearchGithubName",
      component: () =>
        import(
          "../components/SearchGithubName.vue"
        ),
    },
    {
      path: "/abc",
      name: "abc",
      component: () =>
        import("../components/abc.vue"),
    },
    {
      path: "/list",
      component: () =>
        import(
          "../components/testPinia/List.vue"
        ),
    },
    {
      path: "/search",
      component: () =>
        import(
          "../components/testPinia/Search.vue"
        ),
    },
    {
      path: "/photos",
      name: "photos",
      component: () =>
        import("../components/photos.vue"),
    },
    {
      path: "/testFloat",
      name: "testFloat",
      component: () =>
        import(
          "../components/testFloat.vue"
        ),
    },
    {
      path: "/lyrics",
      name: "lyrics",
      component: () =>
        import("../components/lyrics.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () =>
        import("../components/login.vue"),
    },
    {
      path: "/iframe",
      name: "iframe",
      component: () =>
        import("../components/iframe.vue"),
    },
  ],
});

export default router;
