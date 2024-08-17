<template>
  <div class="flex gap-9">
    <div class="border w-52">
      <button
        class="button-select"
        :class="{
          inactive: selected !== 'Overview',
          active: selected === 'Overview',
        }"
        @click="selected = 'Overview'"
      >
        Overview
      </button>
      <button
        class="button-select"
        :class="{
          inactive: selected !== 'Cast',
          active: selected === 'Cast',
        }"
        @click="selected = 'Cast'"
      >
        Cast
      </button>
      <button
        class="button-select"
        :class="{
          inactive: selected !== 'Trailer',
          active: selected === 'Trailer',
        }"
        @click="selected = 'Trailer'"
      >
        Trailer
      </button>
    </div>

    <div class="flex-1">
      <template v-if="selected === 'Overview'">
        <section-overview />
      </template>
      <template v-if="selected === 'Cast'">
        <section-cast />
      </template>
      <template v-if="selected === 'Trailer'">
        <section-trailer />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SectionOverview from "./section-overview.vue";
import SectionCast from "./section-cast.vue";
import SectionTrailer from "./section-trailer.vue";
const selected = ref("Overview");
</script>

<style lang="postcss" scoped>
.button-select {
  @apply block pl-2 border-l py-2 text-lg;
}

.button-select.inactive {
  @apply text-gray-400 border-red-500;
}
.button-select.active {
  @apply text-white border-blue-500;
}
</style>
