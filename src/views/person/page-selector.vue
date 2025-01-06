<template>
  <div class="flex justify-center">
    <div
      class="grid grid-cols-2 overflow-hidden text-sm font-bold border-2 border-black divide-x-2 divide-black justify-items-center rounded-3xl w-70"
    >
      <RouterLink :to="{ name: 'pagePeople' }" class="column-config">People</RouterLink>
      <div class="column-config">Crew</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.column-config {
  @apply px-2 py-2 h-full w-full hover:bg-red-300;
}
</style>
