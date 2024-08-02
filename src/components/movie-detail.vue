<template>
  <div class="flex">
    <div class="p-3">
      <app-image
        :src="movie.image?.original"
        :alt="movie.name"
        class="w-32 h-40 shadow-md r ounded-sm"
      />
    </div>
    <div class="flex flex-col justify-between flex-1 p-3">
      <div>
        <div class="text-2xl font-bold">{{ movie.name }}</div>
        <div>
          <div class="font-medium text-gray-500" v-if="movie.genres.length">
            {{ movie.genres.join(", ") }}
          </div>
          <div class="font-medium text-gray-500" v-else>
            {{ movie.type }}
          </div>
        </div>
      </div>
      <div>
        <div class="text-lg line-clamp-2">
          {{ stripHTML(movie.summary) }}
        </div>
      </div>
      <div class="flex justify-between">
        <div>Status: {{ movie.status }}</div>
        <div>
          Rating:
          {{ movie.rating.average ? movie.rating.average : "n/a" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { stripHTML } from "@/functions/html-parser";
import AppImage from "./app-image.vue";

defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
