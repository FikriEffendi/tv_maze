<template>
  <div class="relative">
    <div class="brightness-50">
      <img
        class="w-full"
        src="/assets/HBOs-The-Last-of-Us-Poster.avif"
        alt="poster movie"
      />
    </div>
    <div class="absolute inset-0">
      <div class="container flex h-full gap-8">
        <div class="flex flex-col justify-center w-1/2 h-full gap-6">
          <div class="my-3 space-y-3 text-white">
            <div class="text-3xl font-bold">Featured in SaintStream</div>
            <div class="text-lg">Best featured for you today</div>
          </div>
          <div class="space-y-3 text-white">
            <div class="">#1 in Australia</div>
            <div>
              <div class="text-4xl font-bold">The Last Of Us</div>
              <div class="flex gap-3 text-sm">
                <div>4.4</div>
                <div>Action</div>
              </div>
            </div>
            <div class="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sit expedita debitis a aut tempora accusamus quam.
              Nemo, quod quasi maxime distinctio sed esse dolorum ducimus
              quaerat fugit, veniam aut!
            </div>
          </div>
          <div class="space-x-4">
            <button class="btn-primary">Play now</button>
            <button class="btn-outline">Add Watchlist</button>
          </div>
        </div>
        <div class="flex flex-col justify-center w-1/2">
          <app-swiper class="w-full" slides-per-view="3">
            <swiper-slide v-for="movie in movies.slice(0, 10)" :key="movie.id">
              <div
                class="relative w-full overflow-hidden rounded-md h-96 bg-slate-300"
              >
                <app-image
                  :src="movie.image"
                  :alt="movie.name"
                  class="w-full h-full"
                />
                <div
                  class="absolute inset-x-0 bottom-0 p-2 text-white bg-black bg-opacity-60"
                >
                  <div class="text-lg">{{ movie.name }}</div>
                  <div class="flex gap-2 text-sm">
                    <div>4.4</div>
                    <div>Action</div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </app-swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppImage from "@/components/app-image.vue";
import { useApi } from "@/functions/api";
import AppSwiper from "@/components/app-swiper.vue";
import { SwiperSlide } from "swiper/vue";

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
