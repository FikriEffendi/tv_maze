<template>
  <div>
    <div>Running Show list</div>
    Texas Chainsaw Massacre
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const api = useApi();
const route = useRoute();

const movie = ref([]);
const getData = async () => {
  const response = await api.GET("shows");
  console.log(response);

  movie.value = response.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      image: movie.image.original,
    };
  });
};
</script>

<style></style>
