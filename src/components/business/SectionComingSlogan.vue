<script setup>
import ScrollTrigger from '@/components/ScrollTrigger.vue'
</script>
<template>
  <section class="section-comimg-slogan">
    <ScrollTrigger :start="600" v-slot="{ isActive }" class="slogan">
      <TypingText
        :text="'區區修煉已經無法滿足了嗎？\n還有比賽等著你！'"
        manual
        :manual-trigger="isActive"
        :per-text="100"
      />
    </ScrollTrigger>
    <img class="img--fluid" src="/tank-field.png" width="1920" height="416" />
  </section>
</template>
<style lang="scss">
.section-comimg-slogan {
  .slogan {
    height: 72px;
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 36px;
    @include breakpoint('mobile') {
      height: 108px;
      font-size: 36px;
      line-height: 54px;
    }

    @include breakpoint('tablet') {
      height: 168px;
      margin-bottom: 110px;
      font-size: 56px;
      line-height: 84px;
    }
  }
}
</style>

<!-- 
  w:1920
  h:416
-->
