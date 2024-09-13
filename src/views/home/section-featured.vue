<template>
  <div>
    <template>
      <div>
        <div></div>
        <div></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useApi } from "@/functions/api";

const api = useApi();

const getData = async () => {
  const response = await api.GET("shows");
};
</script>

<style lang="scss" scoped></style>
