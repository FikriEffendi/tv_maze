import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/page-home.vue";
import LayoutApp from "@/layouts/app/layout-app.vue";
import PageRunning from "@/views/running/page-running.vue";
import MovieDetail from "@/views/detail/page-detail.vue";
import PageAi from "@/views/ai-recomendation/page-ai.vue";
import PageGenre from "@/views/genre/page-genre.vue";
import PageGenreDetail from "@/views/genre-detail/page-genre-detail.vue";
import PagePerson from "@/views/person/page-person.vue";
import PagePeople from "@/views/people/page-people.vue";

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
          path: "/recommendation-ai",
          name: "pageAi",
          component: PageAi,
        },
        {
          path: "/movie/:id",
          name: "movieDetail",
          component: MovieDetail,
        },
        {
          path: "/genre",
          name: "pageGenre",
          component: PageGenre,
        },
        {
          path: "/genre/:name",
          name: "pageGenreDetail",
          component: PageGenreDetail,
        },
        {
          path: "/person",
          name: "pagePerson",
          component: PagePerson,
          children: [
            {
              path: "/people",
              name: "pagePeople",
              component: PagePeople,
            },
          ],
        },

        // {
        //   path: "/people",
        //   name: "peopleDetail",
        //   component: PeopleDetail,
        // },
      ],
    },
    // {
    //   path: "/people",
    //   name: LayoutPeople,
    //   children: [
    //     {
    //       path: "",
    //       name: "peopleList",
    //       component: PeopleList,
    //     },
    //   ],
    // },
  ],
});

export default router;
