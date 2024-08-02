import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/page-home.vue";
import LayoutApp from "@/layouts/app/layout-app.vue";
import PageRunning from "@/views/running/page-running.vue";
import MovieDetail from "@/views/detail/page-detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutApp,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/running-show",
          name: "pageRunning",
          component: PageRunning,
        },
        {
          path: "/movie/:id",
          name: "movieDetail",
          component: MovieDetail,
        },
      ],
    },
  ],
});

export default router;
