<template>
  <div>ini testing</div>
  <pre>{{ movie.name }}</pre>
</template>

<script setup>
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
    image: response.image.original,
    rating: response.rating.average,
    summary: response.summary,
    type: response.type,
    status: response.status,
    language: response.language,
    genres: response.genres,
  };
};

getData();
</script>

<style></style>
