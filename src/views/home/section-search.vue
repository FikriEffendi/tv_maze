<template>
  <div>
    <div class="grid grid-cols-1">
      <router-link
        :to="{ name: 'movieDetail', params: { id: movie.id } }"
        v-for="movie in movies"
        :key="movie.id"
        class="my-2 bg-orange-100 rounded-md"
      >
        <movie-detail :movie="movie" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import MovieDetail from "@/components/movie-detail.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";

const api = useApi();
const route = useRoute();

const movies = ref([]);
const getData = async () => {
  const response = await api.GET("search/shows", {
    q: route.query.search,
  });
  movies.value = response.map((item) => {
    return {
      id: item.show.id,
      name: item.show.name,
      language: item.show.language,
      genres: item.show.genres,
      status: item.show.status,
      rating: item.show.rating,
      image: item.show.image,
      summary: item.show.summary,
      type: item.show.type,
    };
  });
};

getData();
</script>
