<template>
  <div>
    <swiper
      :breakpoints="breakpoints"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :observer="true"
      :observeParents="true"
      class="w-full h-96"
    >
      <swiper-slide
        class="items-center justify-center text-center bg-white"
        v-for="runShow in showMovies.slice(0, 10)"
        :key="runShow.id"
      >
        <router-link :to="{ name: 'movieDetail', params: { id: runShow.id } }">
          <app-image class="h-full" :src="runShow.image" :alt="runShow.name" />
        </router-link>
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
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AppImage from "@/components/app-image.vue";
import { RouterLink } from "vue-router";
import { breakpointsTailwind } from "@vueuse/core";

const modules = [Pagination, Mousewheel];

defineProps({
  showMovies: {
    type: Object,
    required: true,
  },
  breakpoints: {
    type: Object,
    default: () => {
      return {
        //sm: 640px
        [breakpointsTailwind.sm]: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        [breakpointsTailwind.md]: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        [breakpointsTailwind.lg]: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      };
    },
  },
});
</script>

<style>
.swiper-container {
  transition: all 0.3s ease;
}

.swiper-slide {
  transition: all 0.3s ease;
}
</style>
