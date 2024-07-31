<template>
  <div id="section-running">
    <div>Running Show</div>
    <div>
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="flex w-full h-96"
      >
        <swiper-slide
          class="items-center justify-center text-center bg-white"
          v-for="runShow in showMovies.slice(0, 10)"
          :key="runShow.id"
        >
          <app-image class="h-full" :src="runShow.image" :alt="runShow.name" />
        </swiper-slide>

        <swiper-slide>
          <div class="flex items-center justify-center h-full">
            <router-link
              :to="{ name: 'pageRunning' }"
              class="cursor-pointer material-symbols-outlined"
            >
              arrow_forward_ios
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
import { useApi } from "@/functions/api";
import AppImage from "@/components/app-image.vue";

const modules = [Pagination];
const showMovies = ref([]);
const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");
  console.log(response);
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
