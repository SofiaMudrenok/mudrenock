<template>
  <ul class="flex flex-row w-full justify-end py-2 lg:mr-8">
    <NavigationItem v-for="{label, ...rest} in navItems" :key="rest.label" v-bind="rest" :label="label"/>
  </ul>
</template>
<script setup>
import NavigationItem from "@/components/UI/Header/Navigation/NavigationItem.vue"

const navItems  = [
  {label:"Home", path: "/"},
  {label:"Gallery", path: "/gallery"},
  {label:"Location", path: "/location"},
]
</script>