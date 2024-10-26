<template>
  <router-link
    :to="{ name: 'home' }"
    :class="typeLink === 'sidebar' ? 'sidebar-link' : 'navbar-link'"
  >
    Home
  </router-link>
  <router-link
    :class="typeLink === 'sidebar' ? 'sidebar-link' : 'navbar-link'"
    :to="{ name: 'pageRunning' }"
  >
    People
  </router-link>
  <!-- <router-link class="p-2 transition-all rounded-md hover:bg-yellow-400">
          Genre catalog
        </router-link> -->
</template>

<script setup>
defineProps({
  typeLink: {
    type: String,
    default: "sidebar",
  },
});
</script>

<style lang="postcss" scoped>
.sidebar-link {
  @apply p-2 transition-all rounded-md hover:bg-yellow-400;
}
.sidebar-link.router-link-exact-active {
  @apply bg-red-500;
}

.navbar-link {
  @apply p-2 transition-all rounded-md hover:bg-yellow-400 text-white;
}
.navbar-link.router-link-exact-active {
  @apply bg-blue-500;
}
</style>
