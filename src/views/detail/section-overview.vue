<template>
  <div>
    <div>Also watch</div>
    <div class="relative h-96">
      <div class="absolute inset-0">
        <swiper-slider :showMovies="showMovies" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SwiperSlider from "@/components/swiper-slider.vue";
import { useApi } from "@/functions/api";
import { ref } from "vue";

const showMovies = ref([]);

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");
  showMovies.value = response.map((movie) => {
    return {
      id: movie.id,
      name: movie.name,
      image: movie.image.original,
    };
  });
};

getData();
</script>

<style></style>
