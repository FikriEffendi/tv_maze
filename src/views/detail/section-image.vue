<template>
  <div>
    <app-image
      :src="movie.image?.original"
      :alt="movie.name"
      class="rounded-sm shadow-md h-72 w-52"
    />
  </div>
</template>

<script>
import AppImage from "@/components/app-image.vue";
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const movie = ref([]);
const api = useApi();
const route = useRoute();

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}`);
  movie.value = {
    id: response.id,
    image: response.image,
    name: response.name,
  };
};

getData();
</script>

<style></style>
