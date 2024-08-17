<template>
  <input
    type="text"
    placeholder="Cari Film"
    class="p-2 border rounded-md"
    v-model="search"
  />
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = ref("");

if (route.query.search) {
  search.value = route.query.search;
}

watch(search, () => {
  if (search.value) {
    router.replace({ query: { ...route.query, search: search.value } });
    return;
  }
  router.replace({ query: { ...route.query, search: undefined } });
});
</script>
