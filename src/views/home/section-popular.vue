<template>
  <div>
    <div>Popular Show</div>
    <Swiper
      :slides-per-view="4.5"
      :navigation="true"
      :modules="modules"
      class="m-4"
    >
      <SwiperSlide v-for="movie in PopularShow.slice(0, 10)" :key="movie.id">
        <div class="flex gap-2">
          <div class="self-center text-3xl font-bold">1</div>
          <div class="rounded-lg size-24">
            <app-image :src="movie.image" :alt="movie.name" />
          </div>
          <div>
            <div class="text-xs">PG-13</div>
            <div>{{ movie.name }}</div>
            <div class="flex items-baseline gap-1">
              <div v-for="(genre, index) in movie.genres" :key="index">
                <div>{{ genre }}</div>
                <div
                  v-if="index < movie.genres.length - 1"
                  class="bg-black rounded-full size-1"
                ></div>
              </div>
            </div>
            <div>{{ movie.rating }}</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AppImage from "@/components/app-image.vue";

const modules = [Navigation];

const PopularShow = ref([]);

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");

  PopularShow.value = response
    .filter((movie) => movie.rating.average >= 8.5)
    .map((movie) => {
      return {
        id: movie.id,
        name: movie.name,
        image: movie.image.original,
        rating: movie.rating.average,
        genres: movie.genres,
      };
    })
    .sort((a, b) => b.rating - a.rating);
};

getData();
</script>

<style></style>
