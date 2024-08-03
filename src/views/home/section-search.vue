<template>
  <div>
    <div class="grid grid-cols-1 gap-3">
      <template v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import MovieCard from "@/components/movie-card.vue";
import { useDebounceFn } from "@vueuse/core";

import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

const api = useApi();
const route = useRoute();

const debounceGetData = useDebounceFn(() => {
  getData();
}, 1000);

const apiParams = computed(() => {
  return {
    q: route.query.search,
  };
});

watch(apiParams, () => {
  debounceGetData();
});

const movies = ref([]);
const getData = async () => {
  const response = await api.GET("search/shows", apiParams.value);
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

debounceGetData();
</script>
