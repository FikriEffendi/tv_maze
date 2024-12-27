<template>
  <div>
    <div>Show List</div>
    <template v-for="movie in movieGenreList" :key="movie.id">
      <movie-card :movie="movie"></movie-card>
    </template>
  </div>
</template>

<script setup>
import MovieCard from "@/components/movie-card.vue";
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const api = useApi();

const movieGenreList = ref([]);

const getData = async () => {
  const response = await api.GET("shows");

  response.forEach((movie) => {
    movie.some(route.params.name);
  });

  movieGenreList.value = response.map((movie) => {
    return {
      id: movie.id,
      image: movie.image.original,
      name: movie.name,
      genres: movie.genres,
      language: movie.language,
      summary: movie.summary,
      status: movie.status,
      rating: movie.rating,
      type: movie.type,
    };
  });

  console.log(movieGenreList.value);
};

getData();
</script>

<style lang="postcss" scoped></style>
