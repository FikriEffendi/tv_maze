<template>
  <div class="space-y-5">
    <div class="text-xl font-semibold text-gray-800">Random Movies</div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8"
    >
      <template v-for="movie in randMov.slice(0, 12)" :key="movie.id">
        <router-link
          :to="{ name: 'movieDetail', params: { id: movie.id } }"
          class="space-y-3"
        >
          <div class="overflow-hidden rounded-md shadow-lg">
            <app-image
              class="object-cover w-full aspect-video"
              :src="movie.image"
              :alt="movie.name"
            />
          </div>
          <div class="space-y-1">
            <div class="text-lg font-bold text-gray-900 truncate">
              {{ movie.name }}
            </div>
            <div class="text-sm text-gray-600 line-clamp-2">
              {{ movie.genre.join(", " || "No Genre Available") }}
            </div>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import AppImage from "@/components/app-image.vue";
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const randMov = ref([]);

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");

  randMov.value = response.map((mov) => {
    return {
      id: mov.id,
      name: mov.name,
      image: mov.image.original,
      rating: mov.rating.average,
      genre: mov.genres,
    };
  });

  console.log(randMov.value);
};

getData();
</script>
