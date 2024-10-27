<template>
  <div class="relative overflow-hidden shadow-lg">
    <div class="absolute inset-0 brightness-50">
      <img
        srcset="
          /assets/HBOs-The-Last-of-Us-Poster.jpg     640w,
          /assets/HBOs-The-Last-of-Us-Poster-lg.avif 800w
        "
        src="/assets/HBOs-The-Last-of-Us-Poster-lg.avif"
        class="w-full h-auto"
        alt="Elva dressed as a fairy"
      />
    </div>
    <div class="relative">
      <div class="my-3 space-y-3 text-white lg:hidden">
        <div class="text-2xl font-bold lg:text-3xl">
          Featured in SaintStream
        </div>
        <div class="lg:text-lg">Best featured for you today</div>
      </div>
      <div class="container flex flex-col h-full gap-8 lg:flex-row">
        <div class="flex flex-col justify-center h-full gap-6 lg:w-1/2">
          <div class="hidden my-3 space-y-3 text-white lg:block">
            <div class="text-2xl font-bold lg:text-3xl">
              Featured in SaintStream
            </div>
            <div class="lg:text-lg">Best featured for you today</div>
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
        <div
          class="flex flex-col justify-center order-first lg:w-1/2 lg:order-last"
        >
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
.shadow-lg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>
