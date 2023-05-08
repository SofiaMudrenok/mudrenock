<template>
  <div class="">
    <img :src="imageSrc"/>
    <div>
      <p class="py-2 text-creamy text-center text-xl">
        {{props.desc}}
      </p>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
// eslint-disable-next-line no-undef
const props = defineProps(["img","desc"])

const imageSrc = computed(() => {
  return require('@/assets/images/'+ props.img +'.webp');
});
</script>
