<template>
  <div>
    <div>Popular Show</div>
    <Swiper
      :breakpoints="breakpoints"
      :navigation="true"
      :modules="modules"
      class="m-4"
    >
      <SwiperSlide
        v-for="(movie, index) in PopularShow.slice(0, 10)"
        :key="movie.id"
      >
        <router-link
          class="flex gap-2"
          :to="{ name: 'movieDetail', params: { id: movie.id } }"
        >
          <div class="self-center text-3xl font-bold">{{ index + 1 }}</div>
          <app-image
            class="rounded-lg size-24 shrink-0"
            :src="movie.image"
            :alt="movie.name"
          />
          <div class="">
            <div class="text-xs">PG-13</div>
            <div>{{ movie.name }}</div>
            <div class="flex items-baseline gap-1 text-sm">
              <template
                v-for="(genre, index) in movie.genres.slice(0, 2)"
                :key="index"
              >
                <div>{{ genre }}</div>
                <div
                  v-if="index < movie.genres.length - 1"
                  class="bg-black rounded-full size-1"
                ></div>
              </template>
              <div v-if="movie.genres.length > 2">...</div>
            </div>
            <div>{{ movie.rating }}</div>
          </div>
        </router-link>
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
import { RouterLink } from "vue-router";
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = ref({
  //sm: 640px
  [breakpointsTailwind.sm]: {
    slidesPerView: 1.5,
    spaceBetween: 10,
  },
  [breakpointsTailwind.md]: {
    slidesPerView: 2.5,
    spaceBetween: 15,
  },
  [breakpointsTailwind.lg]: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  [breakpointsTailwind.xl]: {
    slidesPerView: 4.5,
    spaceBetween: 25,
  },
});

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
