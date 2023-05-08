<template>
  <nav class="bg-nardo-black py-4 sticky z-50 top-0">
    <hr class="border border-creamy">
    <div class="flex items-center">
      <img src="@/assets/images/Logo.webp" class="w-1/12 h-1/2 py-2 lg:ml-8">
      <NavigationComponent/>
    </div>
    <hr class="border border-creamy">
  </nav>
</template>
<script setup>
import NavigationComponent from "@/components/UI/Header/Navigation/NavigationComponent";
</script>