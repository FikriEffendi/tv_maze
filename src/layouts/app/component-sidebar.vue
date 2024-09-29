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
      <div class="flex flex-col p-4">
        <router-link
          :to="{ name: 'home' }"
          class="p-2 transition-all rounded-md hover:bg-yellow-400"
        >
          Home
        </router-link>
        <!-- <router-link class="p-2 transition-all rounded-md hover:bg-yellow-400">
          People
        </router-link>
        <router-link class="p-2 transition-all rounded-md hover:bg-yellow-400">
          Genre catalog
        </router-link> -->y
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTemplateStore } from "@/stores/template";

const isShow = useTemplateStore();
</script>

<style>
.blur-backdrop {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
</style>
