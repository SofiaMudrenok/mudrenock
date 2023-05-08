<template>
  <hr class="border border-creamy">
  <div class="grid grid-cols-3 bg-nardo-black py-8 text-creamy">
  <FooterLinks/>
  <div class="grid justify-center">
    <span class="text-creamy flex flex-row">Phone:<p>{{phone}}</p></span>
    <div class="">
      <a href="https://instagram.com/evgeny_mudrenock?igshid=YmMyMTA2M2Y=">
        <IconTemplate :icon="insta" :width="48" :height="48" class="m-2"/><!--insta ico TO-DO-->
      </a>
<!--      <a href="https://m.facebook.com/mudrenock?_rdr">-->
<!--        <IconTemplate :icon="facebook" :width="48" :height="48" class="m-2"/>&lt;!&ndash;facebook ico TO-DO&ndash;&gt;-->
<!--      </a>-->
    </div>
  </div>
  <div>
    <img src="@/assets/images/Logo.webp" class="p-1">
  </div>
</div>
  <hr class="border border-creamy">
  <CopyrightBlock/>
</template>
<script setup>
import IconTemplate from "@/components/UI/Icon/IconTemplate";
import CopyrightBlock from "@/components/UI/Footer/Blocks/CopyrightBlock";
import FooterLinks from "@/components/UI/Footer/Blocks/FooterLinks";

const phone = "+380505938824"
</script>