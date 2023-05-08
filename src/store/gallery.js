import {defineStore} from "pinia";

export const useGalleryStore = defineStore({
    id:"gallery",
    state:()=>({
        products:[]
    })
})