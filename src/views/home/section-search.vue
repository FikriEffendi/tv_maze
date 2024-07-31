<template>
  <div>
    <div class="grid grid-cols-1">
      <router-link
        :to="{ name: 'movieDetails', params: { id: movie.id } }"
        v-for="movie in movies"
        :key="movie.id"
        class="relative my-2 bg-orange-100 rounded-md"
      >
        <div class="flex">
          <div class="p-3">
            <app-image
              :src="movie.image?.original"
              :alt="movie.name"
              class="w-32 h-40 shadow-md r ounded-sm"
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-3">
            <div>
              <div class="text-2xl font-bold">{{ movie.name }}</div>
              <div>
                <div
                  class="font-medium text-gray-500"
                  v-if="movie.genres.length"
                >
                  {{ movie.genres.join(", ") }}
                </div>
                <div class="font-medium text-gray-500" v-else>
                  {{ movie.type }}
                </div>
              </div>
            </div>
            <div>
              <div class="text-lg line-clamp-2">
                {{ stripHTML(movie.summary) }}
              </div>
            </div>
            <div class="flex justify-between">
              <div>Status: {{ movie.status }}</div>
              <div>
                Rating:
                {{ movie.rating.average ? movie.rating.average : "n/a" }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="movie.popup"
          class="absolute p-2 text-white bg-gray-700 rounded top-8 right-3"
        >
          {{ movie.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import AppImage from "@/components/app-image.vue";
import { stripHTML } from "@/functions/html-parser";
import { ref } from "vue";
import { useRoute } from "vue-router";

const api = useApi();
const route = useRoute();

const movies = ref([]);
const getData = async () => {
  const response = await api.GET("search/shows", {
    q: route.query.search,
  });
  movies.value = response.map((item) => {
    return {
      id: item.show.id,
      name: item.show.name,
      language: item.show.language,
      genres: item.show.genres,
      status: item.show.status,
      rating: item.show.rating,
      image: item.show.image,
      summary: item.show.summary,
    };
  });
};

getData();
</script>
