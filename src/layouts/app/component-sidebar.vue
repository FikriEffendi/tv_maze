<template>
  <div>
    <div
      :class="{ hidden: !isShow.bool, block: isShow.bool, 'z-40': isShow.bool }"
      class="fixed top-0 left-0 w-64 min-h-screen shadow-md bg-slate-300 bg-opacity-80 bg-clip-padding blur-backdrop"
    >
      <div class="flex items-center justify-between p-4">
        <router-link
          :to="{ name: 'home' }"
          class="p-2 text-lg transition-all hover:text-amber-800"
          :class="{ 'sm:hidden': !isShow.bool }"
        >
          Logo
        </router-link>
        <span
          class="p-2 cursor-pointer material-symbols-outlined"
          @click="isShow.bool = !isShow.bool"
        >
          menu
        </span>
      </div>
      <div class="flex flex-col p-4 testing">
        <link-navbar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTemplateStore } from "@/stores/template";
import LinkNavbar from "./link-navbar.vue";

const isShow = useTemplateStore();
</script>

<style lang="postcss" scoped>
.blur-backdrop {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>
