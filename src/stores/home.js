import { axiosClient } from "@/axiosClient";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useMovieStore=defineStore('movie',()=>{
    const searchedMovie=ref([]);
    const showedMovie=ref([]);

    const searchMovie=async(keyword)=>{
        const {data}=await axiosClient.get(`search/shows?q=${keyword}`);
        searchedMovie.value=data.map((item)=>item.show);
    }

    const showMovie=async()=>{
        const{data}=await axiosClient.get(`shows`)
        showedMovie.value=data.map((item)=>{
            return{
                id:item.id,
                name:item.name,
                language:item.language,
                genres:item.genres,
                status:item.status,
                rating:item.rating,
                image:item.image,
                summary:item.summary
            }
        })
    }

    const popularShow=computed(()=>{
        return showedMovie.value.filter((movie)=>movie.rating.average>=8.0)
    })

    const runningShow=computed(()=>{
        return showedMovie.value.filter((movie)=>movie.status==='Running')
    })

    return{searchedMovie, searchMovie, showedMovie, showMovie, popularShow, runningShow}
})