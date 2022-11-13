<script setup>
import GameIntro1 from '@/components/business/GameIntro1.vue'
import GameIntro2 from '@/components/business/GameIntro2.vue'
import GameIntro3 from '@/components/business/GameIntro3.vue'
</script>
<template>
  <section class="section-intro">
    <GameIntro1 />
    <GameIntro2 />
    <GameIntro3 />
  </section>
</template>
<style lang="scss">
.section-intro {
  .slogan {
    $shadow: theme-color(secondary);
    text-shadow: -3px 0 $shadow, 0 3px $shadow, 3px 0 $shadow, 0 -3px $shadow;
    font-size: 16px;
    line-height: 20px;
    @include breakpoint('mobile') {
      font-size: 24px;
      line-height: 28px;
    }

    @include breakpoint('laptop') {
      font-size: 36px;
      line-height: 42px;
    }
  }
}
</style>
