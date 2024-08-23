<template>
  <div>
    <div>Popular Show</div>
    <div v-for="show in PopularShow.slice(0, 10)" :key="show.id">
      <div>{{ show.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";

const PopularShow = ref([]);

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");

  PopularShow.value = response
    .filter((movie) => movie.rating.average >= 8.0)
    .map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        image: movie.image.original,
        rating: movie.rating.average,
      };
    });
};

getData();
</script>

<style></style>
