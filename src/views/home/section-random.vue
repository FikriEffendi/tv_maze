<template>
  <div class="space-y-5">
    <div>Random Movies</div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-12">
      <template v-for="movie in randMov.slice(0, 12)">
        <router-link
          :to="{ name: 'movieDetail', params: { id: movie.id } }"
          class="space-y-1"
        >
          <div>
            <app-image
              class="w-64 h-40 bg-cover rounded-md"
              :src="movie.image"
              :alt="movie.name"
            />
          </div>
          <div class="space-y-2">
            <div class="text-2xl font-bold">Judul</div>
            <div class="text-sm">Deskripsi</div>
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
