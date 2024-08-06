<template>
  <div class="flex gap-9">
    <div>
      <app-image
        :src="movie.image?.original"
        :alt="movie.name"
        class="rounded-sm shadow-md h-72 w-52"
      />
    </div>
    <div>
      <div>{{ movie.name }}</div>
      <div>{{ movie.premiered }}</div>
    </div>
  </div>
</template>

<script setup>
import AppImage from "@/components/app-image.vue";
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const movie = ref([]);
const api = useApi();
const route = useRoute();

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}`);
  console.log(response);
  movie.value = {
    id: response.id,
    name: response.name,
    image: response.image,
    rating: response.rating.average,
    summary: response.summary,
    type: response.type,
    status: response.status,
    language: response.language,
    genres: response.genres,
    premiered: response.premiered.split("-")[0],
  };
};

getData();
</script>

<style></style>
