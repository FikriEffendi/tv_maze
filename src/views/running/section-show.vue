<template>
  <div>
    <div>Running Show list</div>
    <div class="my-2 bg-orange-100 rounded-md">
      <movie-detail :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";
import MovieDetail from "@/components/movie-detail.vue";

const api = useApi();
const route = useRoute();

const movie = ref([]);
const getData = async () => {
  const response = await api.GET("shows");
  console.log(response);

  movie.value = response
    .filter((movie) => movie.status === "Running")
    .map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        image: movie.image.original,
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
