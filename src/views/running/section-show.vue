<template>
  <div>
    <div>Running Show list</div>
    <div class="grid grid-cols-1 gap-3">
      <template v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";
import MovieCard from "@/components/movie-card.vue";

const api = useApi();
const route = useRoute();

const movies = ref([]);
const getData = async () => {
  const response = await api.GET("shows");

  movies.value = response
    .filter((movie) => movie.status === "Running")
    .map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        image: movie.image,
        genres: movie.genres,
        language: movie.language,
        summary: movie.summary,
        status: movie.status,
        rating: movie.rating,
        type: movie.type,
      };
    });
};

getData();
</script>

<style></style>
