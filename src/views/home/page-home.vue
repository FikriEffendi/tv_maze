<template>
  <div class="py-7">
    <section-search v-if="isSearch" />
    <template v-else>
      <section-running />
    </template>
  </div>
</template>

<script setup>
import { useMovieStore } from "@/stores/home";
import SectionSearch from "./section-search.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import SectionRunning from "./section-running.vue";

const route = useRoute();

const isSearch = computed(() => {
  if (route.query.search) {
    return true;
  }
  return false;
});

const store = useMovieStore();

// watch(
//   () => props.keyword,
//   async (newKeyword) => {
//     if (newKeyword) {
//       await store.searchMovie(newKeyword);
//       movies.value = store.searchedMovie.map((movie) => {
//         return {
//           ...movie,
//           popup: false,
//         };
//       });
//     } else {
//       store.searchedMovie = [];
//       await fetchRandomMovies();
//     }
//   }
// );

const showPopup = (index) => {
  movies.value[index].popup = true;
};

const hidePopup = (index) => {
  movies.value[index].popup = false;
};

// onMounted(async () => {
//   if (!props.keyword) {
//     await fetchRandomMovies();
//   } else {
//     await store.searchMovie(props.keyword);
//     movies.value = store.searchedMovie.map((movie) => {
//       return {
//         ...movie,
//         popup: false,
//       };
//     });
//   }
// });
</script>
