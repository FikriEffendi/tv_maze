<template>
  <div class="relative">
    <div class="absolute inset-x-0 bg-yellow-400 h-[42rem] flex items-center">
      <div class="w-full h-[39rem] bg-slate-300">
        Halo

        <div class="flex h-[37rem] justify-center">
          <div class="w-1/2 bg-red-200"></div>

          <div class="w-1/2 bg-blue-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";

import { ref } from "vue";

const api = useApi();

const movies = ref([]);

const getData = async () => {
  const response = await api.GET("shows");

  movies.value = response.map((movie) => ({
    id: movie.id,

    name: movie.name,

    image: movie.image.original,
  }));
};

getData();
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>

Saya sudah mengikuti kodingan dari anda kenapa
