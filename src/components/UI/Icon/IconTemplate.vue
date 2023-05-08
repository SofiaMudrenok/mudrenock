<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="iconWidth"
    :height="iconHeigth"
    viewBox="0 0 24 24"
    :aria-labelledby="icon"
    role="presentation"
  >
    <title v-if="title" :id="icon" lang="en">{{ title }}</title>
    <g :fill="color">
      <IconComponent />
    </g>
  </svg>
</template>

<script setup>
import { computed, toRefs, defineProps } from "vue";
import { ICONS } from "./icons.const";

const props = defineProps({
  icon: {
    type: String,
    default: "insta",
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  color: {
    type: String,
    default: "#ffffff",
  },
  size: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
});
const { icon, size, width, height } = toRefs(props);

const IconComponent = computed(() => ICONS[icon.value]());
const iconWidth = size.value ?? width.value;
const iconHeigth = size.value ?? height.value;
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
