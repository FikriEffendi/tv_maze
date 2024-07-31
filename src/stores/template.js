import { defineStore } from "pinia";
import { ref } from "vue";

export const useTemplateStore=defineStore('template',()=>{
  const bool=ref(false);

  return{bool}
})