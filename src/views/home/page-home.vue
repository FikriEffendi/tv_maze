<template>
  <div class="">
    <section-search v-if="isSearch" />
    <template v-else>
      <section-running />
    </template>
  </div>
</template>

<script setup>
import SectionSearch from "./section-search.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import SectionRunning from "./section-running.vue";

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
