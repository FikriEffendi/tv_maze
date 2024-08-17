<template>
  <div class="grid grid-cols-4 gap-6">
    <div v-for="cast in casts" :key="cast.id">
      <app-image class="w-24" :src="cast.image" :alt="cast.name" />
      <div>nama:{{ cast.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";
import AppImage from "@/components/app-image.vue";

const casts = ref([]);
const route = useRoute();
const api = useApi();

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}/cast`);

  casts.value = response.map((cast) => {
    return {
      id: cast.person.id,
      name: cast.person.name,
      image: cast.person.image.original,
    };
  });
  console.log(casts.value);
};

getData();
</script>

<style></style>
