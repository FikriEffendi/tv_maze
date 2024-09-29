<template>
  <div class="min-h-screen bg-slate-200">
    <component-navbar class="container" />
    <component-sidebar />
    <div class="pt-24">
      <router-view />
    </div>
    <component-footer class="mt-10" />
  </div>
</template>

<script setup>
import { useTemplateStore } from "@/stores/template";
import ComponentFooter from "./component-footer.vue";
import ComponentNavbar from "./component-navbar.vue";
import ComponentSidebar from "./component-sidebar.vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

const isShow = useTemplateStore();
const route = useRoute();

// watchEffect(() => {
//   if (isShow.bool) {
//     isShow.bool = false;
//   }
// });
</script>
