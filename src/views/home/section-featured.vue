<template>
  <div class="relative overflow-hidden shadow-lg">
    <!-- Backgroud Image Container -->
    <div class="absolute inset-0 brightness-50">
      <picture class="w-full h-full">
        <!-- For Small and Medium Screen -->
        <source
          media="(max-width: 1023px)"
          srcset="/public/assets/HBOs-The-Last-of-Us-Poster.jpg"
        />
        <!-- For large screen -->
        <source
          media="(min-width: 1024px)"
          srcset="/public/assets/HBOs-The-Last-of-Us-Poster-lg.avif"
        />
        <!-- Fallback image -->
        <img
          src="/public/assets/HBOs-The-Last-of-Us-Poster-lg.avif"
          class="object-cover w-full h-full"
          alt="The Last Of Us Background"
        />
      </picture>
    </div>

    <!-- Content Container -->
    <div class="relative">
      <!-- Mobile/Tablet Header -->
      <div class="container px-4 py-5 text-white lg:hidden">
        <div class="space-y-3">
          <div class="text-2xl font-bold md:text-3xl">
            Featured in SaintStream
          </div>
          <div class="md:text-lg">Best featured for you today</div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="container px-4 py-6 md:py-8 lg:py-12">
        <div class="flex flex-col h-full gap-8 lg:flex-row">
          <!-- Left Content -->
          <div class="flex flex-col justify-center h-full gap-6 lg:w-1/2">
            <!-- Desktop Header -->
            <div class="hidden space-y-3 text-white lg:block">
              <div class="text-3xl font-bold">Featured in SaintStream</div>
              <div class="text-lg">Best featured for you today</div>
            </div>

            <!-- Movie Info -->
            <div class="space-y-4 text-white">
              <div class="text-lg">#1 in Australia</div>
              <div class="space-y-2">
                <div class="text-3xl font-bold md:text-4xl">The Last Of Us</div>
                <div class="flex gap-3 text-sm md:text-base">
                  <div>4.4</div>
                  <div>Action</div>
                </div>
              </div>
              <div class="text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae sit expedita debitis a aut tempora accusamus quam.
                Nemo, quod quasi maxime distinctio sed esse dolorum ducimus
                quaerat fugit, veniam aut!
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-4 pt-2">
              <button class="btn-primary">Play now</button>
              <button class="btn-outline">Add Watchlist</button>
            </div>
          </div>

          <!-- Right Content - Swiper -->
          <div
            class="flex flex-col justify-center order-first lg:w-1/2 lg:order-last"
          >
            <app-swiper
              class="w-full"
              :slides-per-view="1"
              :breakpoints="{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }"
            >
              <swiper-slide
                v-for="movie in movies.slice(0, 10)"
                :key="movie.id"
              >
                <div
                  class="relative w-full overflow-hidden rounded-md aspect-[2/3] bg-slate-300"
                >
                  <app-image
                    :src="movie.image"
                    :alt="movie.name"
                    class="object-cover w-full h-full"
                  />
                  <div
                    class="absolute inset-x-0 bottom-0 p-2 text-white bg-black bg-opacity-60"
                  >
                    <div class="text-base md:text-lg">{{ movie.name }}</div>
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
