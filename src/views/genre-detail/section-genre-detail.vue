<template>
  <div>
    <div>Show List</div>
    <template v-for="movie in movieGenreList" :key="movie.id">
      <movie-card :movie="movie"></movie-card>
    </template>
    <!-- Jika tidak ada -->
    <div v-if="movieGenreList.length === 0" class="mt-4 text-gray-500">
      No shows available for this genre.
    </div>
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
  try {
    const response = await api.GET("shows");

    // Memfilter data berdasarkan genre yang sesuai dengan route.params.name
    movieGenreList.value = response
      .filter((movie) => {
        return movie.genres.includes(route.params.name);
      })
      .map((movie) => {
        return {
          id: movie.id,
          image: movie.image,
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
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

getData();
</script>

<style lang="postcss" scoped></style>
