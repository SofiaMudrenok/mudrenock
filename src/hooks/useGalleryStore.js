import {storeToRefs} from "pinia";
import {useGalleryStore} from "@/store/gallery";
import {getProducts} from "@/api/gallery";

export const useProductsHook = () => {
    const {products} = storeToRefs(useGalleryStore())

    const loadProducts = () => {
        getProducts().then((response)=>{
            products.value = response.data
            return response
        })
    }
return{
        products,
    loadProducts
}
}
