<template>
    <div>
        <div>
            <img :src="movie.image.original" alt="movie.name">
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/home';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

   
   const route=useRoute();
   const store=useMovieStore();

   const movie=ref([]);

   onMounted(async()=>{
    const id=route.params.id;
    console.log(id); // Check if the id is correctly being passed
    if(store.showedMovie.length===0){
        await store.showMovie();
    }
    movie.value=store.showedMovie.find(movie=>movie.id===parseInt(id));
})
</script>
