<template>
  <div>
    <div class="divide-y-2 divide-slate-400">
      <div
        v-for="movieGenre in genreList"
        :key="movieGenre.id"
        class="py-5 text-xl font-bold hover:bg-green-700 hover:text-white"
      >
        <router-link
          :to="{ name: 'pageGenreDetail', params: { name: movieGenre.genre } }"
        >
          <div class="container">{{ movieGenre.genre }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const api = useApi();

const genreList = ref([]);

const getData = async () => {
  const response = await api.GET("shows");

  response.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!genreList.value.some((item) => item.genre === genre)) {
        genreList.value.push({
          id: movie.id,
          genre: genre,
        });
      }
    });
  });
};

getData();
</script>

<style lang="postcss" scoped></style>
