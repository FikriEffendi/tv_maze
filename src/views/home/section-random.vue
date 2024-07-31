<template>
  <div>
    <div>Random Movies</div>
    <div v-for="show in randMovies" :key="show.id">
      <pre>{{ show.name }}</pre>
    </div>
  </div>
</template>

<script setup>
const randMovies = ref([]);

const fetchRandomMovies = async () => {
  randMovies.value = [];
  if (store.showedMovie.length === 0) {
    await store.showMovie();
  }

  for (let i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * store.showedMovie.length);
    const randomMovie = store.showedMovie[rand];
    randMovies.value.push(randomMovie);
  }
};
</script>
