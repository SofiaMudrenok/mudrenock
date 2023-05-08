<template>
<div class="py-8 flex w-full justify-around">
<CategoryCard :desc="desc" v-for="{desc, ...rest} in categories" :key="rest.desc" v-bind="rest" :img="rest.img"/>
</div>
</template>

<script setup>
import CategoryCard from "./Cards/CategoryCard"

const categories = [
    {img:'key', desc: 'Pendant \nYellow gold 585 proof'},
  {img:'earrings', desc: 'Earrings \n585 rose and white gold with diamonds'},
  {img:'watches', desc: 'Watch bracelet\n' +
        'Yellow gold 585 proof, 85 grams'}
]
</script>