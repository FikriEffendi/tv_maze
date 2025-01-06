<template>
  <div>
    <!-- Kirim array data ke komponen page-selector -->
    <page-selector></page-selector>
    <page-people></page-people>
  </div>
</template>

<script setup>
import PageSelector from "@/views/person/page-selector.vue";
import PagePeople from "../people/page-people.vue";
</script>

<style lang="scss" scoped></style>
