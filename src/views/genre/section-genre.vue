<template>
  <div>
    <div class="divide-y-2 divide-slate-400">
      <div
        v-for="movieGenre in genreList"
        :key="movieGenre.id"
        class="py-5 text-xl font-bold hover:bg-green-700 hover:text-white"
      >
        <div class="container">{{ movieGenre.genre }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";

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
