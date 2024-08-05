<template>
  <div>ini testing</div>
</template>

<script>
import { useApi } from "@/functions/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const movie = ref([]);
const api = useApi();
const route = useRoute();

const getData = async () => {
  const response = await api.GET(`shows/${route.params.id}`);
  console.log(response);
};
</script>

<style></style>
