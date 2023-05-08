<template>
  <HeaderPanel/>
  <div class="bg-nardo-black w-full min-h-screen">
    <router-view class="bg-nardo-black"/>
  </div>
  <FooterComponent/>
</template>

<script setup>
import HeaderPanel from "@/components/UI/Header/HeaderPanel";
import FooterComponent from "@/components/UI/Footer/FooterComponent";
</script>
