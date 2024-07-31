<template>
  <div>
    <div>Popular Show</div>
    <div v-for="fav in store.popularShow.slice(0, 10)" :key="fav.id">
      <pre>{{ fav.name }}</pre>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
