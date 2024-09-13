<template>
  <div class="">
    <section-search v-if="isSearch" />
    <template v-else>
      <div class="space-y-10">
        <section-running />
        <section-popular />
        <section-featured />
        <section-random />
      </div>
    </template>
  </div>
</template>

<script setup>
import SectionSearch from "./section-search.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import SectionRunning from "./section-running.vue";
import SectionPopular from "./section-popular.vue";
import SectionRandom from "./section-random.vue";
import SectionFeatured from "./section-featured.vue";

const route = useRoute();

const isSearch = computed(() => {
  if (route.query.search) {
    return true;
  }
  return false;
});

const showPopup = (index) => {
  movies.value[index].popup = true;
};

const hidePopup = (index) => {
  movies.value[index].popup = false;
};
</script>
