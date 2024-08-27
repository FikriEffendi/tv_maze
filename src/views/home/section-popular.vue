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
          <div class="bg-black rounded-lg size-24"></div>
          <div>
            <div class="text-xs">PG-13</div>
            <div>{{ movie.name }}</div>
            <div class="flex items-baseline gap-1">
              <div>Horor</div>
              <div class="bg-black rounded-full size-1"></div>
              <div>Fantasy</div>
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
    });
};

getData();
</script>

<style></style>
