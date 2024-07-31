<template>
  <div class="min-h-screen bg-slate-200">
    <component-navbar />
    <component-sidebar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import ComponentNavbar from "./component-navbar.vue";
import ComponentSidebar from "./component-sidebar.vue";
</script>
