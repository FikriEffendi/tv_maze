<template>
  <div class="fixed inset-x-0 z-30 text-black bg-green-700">
    <div class="container">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center gap-2">
          <span
            class="cursor-pointer material-symbols-outlined lg:hidden"
            @click="isShow.bool = !isShow.bool"
            v-if="!isShow.bool"
          >
            menu
          </span>
          <div class="flex items-center space-x-4">
            <router-link
              :to="{ name: 'home' }"
              class="text-lg transition-all hover:text-white"
              :class="{ 'sm:hidden': isShow.bool }"
            >
              Logo
            </router-link>
            <div class="hidden space-x-2 lg:block">
              <link-navbar type-link="navbar" />
            </div>
          </div>
        </div>
        <div class="">
          <input-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTemplateStore } from "@/stores/template";
import InputSearch from "@/components/input-search.vue";
import LinkNavbar from "./link-navbar.vue";

const isShow = useTemplateStore();
</script>
