<template>
  <div class="flex gap-9">
    <section-image />
    <div>
      <div class="text-3xl font-bold">{{ movie.name }}</div>
      <div class="my-2 font-medium">{{ movie.premiered }}</div>
      <div class="flex gap-2">
        <div>
          <app-image :src="imdbLogo" :alt="IMDb - logo" class="w-8 h-8" />
        </div>
        <div class="font-semibold">{{ movie.rating }}/10</div>
      </div>
      <div class="my-4">
        <div class="text-lg font-medium">{{ stripHTML(movie.summary) }}</div>
      </div>
      <div class="space-y-1">
        <div class="font-semibold">
          Starring:
          <span>
            {{ starring }}
          </span>
        </div>
        <div class="font-semibold">Directed By:{{ directed }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionImage from "./section-image.vue";
import { useApi } from "@/functions/api";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import imdbLogo from "@/assets/imdb-logo.svg";
import { stripHTML } from "@/functions/html-parser";

const movie = ref([]);
const api = useApi();
const route = useRoute();
const casts = ref([]);
const crews = ref([]);

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}`);
  const responseCast = await api.GET(`shows/${route.params.id}/cast`);
  const responseCrew = await api.GET(`shows/${route.params.id}/crew`);
  console.log(responseCrew);
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

  crews.value = responseCrew.map((crew) => {
    return {
      type: crew.type,
      id: crew.person.id,
      name: crew.person.name,
    };
  });
};

const starring = computed(() => {
  return casts.value
    .slice(0, 2)
    .map((cast) => cast.name)
    .join(", ");
});

const directed = computed(() => {
  const executiveProducer = crews.value.filter(
    (crew) => crew.type === "Executive Producer"
  );
  return executiveProducer.length > 0 ? executiveProducer[0].name : "N/A";
});

getData();
</script>

<style></style>
