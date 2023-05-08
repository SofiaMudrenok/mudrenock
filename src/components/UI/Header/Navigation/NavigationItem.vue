<template>
  <li class="p-2 mx-4">
    <router-link :to="path">
      <span class="py-2 text-creamy text-l">{{label}}</span>
    </router-link>
  </li>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps(["label","path"]) ;
</script>
