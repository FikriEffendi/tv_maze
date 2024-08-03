<template>
  <div class="min-h-screen bg-slate-200">
    <component-navbar />
    <component-sidebar />
    <div class="container pt-24">
      <router-view />
    </div>
    <component-footer class="mt-10" />
  </div>
</template>

<script setup>
import ComponentFooter from "./component-footer.vue";
import ComponentNavbar from "./component-navbar.vue";
import ComponentSidebar from "./component-sidebar.vue";
</script>
