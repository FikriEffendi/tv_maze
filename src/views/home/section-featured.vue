<template>
  <div>
    <template>
      <div class="bg-slate-300">
        Halo
        <div class="bg-red-200"></div>
        <div class="bg-blue-200"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";

const api = useApi();
const movies = ref([]);

const getData = async () => {
  const response = await api.GET("shows");

  movies.value = response.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      image: movie.image.original,
    };
  });
};

getData();
</script>

<style lang="scss" scoped></style>
