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
      <div class="flex gap-2">
        <div>
          <app-image :src="imdbLogo" :alt="IMDb - logo" class="w-8 h-8" />
        </div>
        <div>{{ movie.rating }}/10</div>
      </div>
      <div>
        <div>{{ stripHTML(movie.summary) }}</div>
      </div>
      <div>
        Starring:
        <span>
          {{ starring }}
        </span>
      </div>
      <div>Directed By:{{}}</div>
    </div>
  </div>
</template>

<script setup>
import AppImage from "@/components/app-image.vue";
import { useApi } from "@/functions/api";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import imdbLogo from "@/assets/imdb-logo.svg";
import { stripHTML } from "@/functions/html-parser";

const movie = ref([]);
const api = useApi();
const route = useRoute();
const casts = ref([]);

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}`);
  const responseCast = await api.GET(`shows/${route.params.id}/cast`);
  console.log(response);
  console.log(responseCast);
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

  casts.value = responseCast.map((cast) => {
    return {
      id: cast.person.id,
      name: cast.person.name,
    };
  });
};

const starring = computed(() => {
  return casts.value
    .filter((cast) => cast.id === 1 || cast.id === 2)
    .map((cast) => cast.name)
    .join(", ");
});

getData();
</script>

<style></style>
