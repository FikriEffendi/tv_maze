<template>
  <div id="section-running">
    <div class="text-xl font-semibold text-gray-800">Running Show</div>
    <div v-if="loading">
      <div>loading...</div>
    </div>
    <div v-else>
      <swiper-slider :showMovies="showMovies" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useApi } from "@/functions/api";
import SwiperSlider from "@/components/swiper-slider.vue";

const showMovies = ref([]);
const api = useApi();
const loading = ref(false);

const getData = async () => {
  loading.value = true;
  try {
    const response = await api.GET("shows");
    showMovies.value = response
      .filter((movie) => movie.status === "Running")
      .map((movie) => {
        return {
          id: movie.id,
          name: movie.name,
          image: movie.image.original,
        };
      });
  } finally {
    loading.value = false;
  }
};

getData();
</script>

<style lang="postcss">
.swiper-pagination-bullet {
  @apply bg-transparent;
}
</style>
