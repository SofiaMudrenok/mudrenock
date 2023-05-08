<template>
<div class="lg:mx-16 h-full p-8">
  <div class="grid grid-cols-3 gap-4">
    <div v-for="product in products" :key="product.id" class="p-4 border-2 rounded border-creamy">
      <img :src="product.imageUrl" />
      <p class="text-creamy text-center py-2 text-xl">{{product.name}}</p>
    </div>
  </div>
</div>
</template>

<script setup>
import {onMounted} from "vue";
import {useProductsHook} from "@/hooks/useGalleryStore.js"

const {products,loadProducts} = useProductsHook();

onMounted(()=>{loadProducts()});

</script>
