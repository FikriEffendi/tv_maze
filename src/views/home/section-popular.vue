<template>
  <div>
    <div>Popular Show</div>
    <div class="flex gap-5 overflow-auto">
      <template v-for="movie in PopularShow" :key="movie.id">
        <div class="flex gap-2">
          <div class="self-center text-3xl font-bold">1</div>
          <div class="bg-black rounded-lg size-24"></div>
          <div>
            <div class="text-xs">PG-13</div>
            <div>Nama</div>
            <div class="flex items-baseline gap-1">
              <div>Horor</div>
              <div class="bg-black rounded-full size-1"></div>
              <div>Fantasy</div>
            </div>
            <div>Rating</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import SwiperSlider from "@/components/swiper-slider.vue";

const PopularShow = ref([]);

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");

  PopularShow.value = response
    .filter((movie) => movie.rating.average >= 8.0)
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
