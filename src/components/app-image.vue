<template>
  <div class="overflow-hidden">
    <img class="object-cover w-full h-full" :src="src" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
});
</script>
