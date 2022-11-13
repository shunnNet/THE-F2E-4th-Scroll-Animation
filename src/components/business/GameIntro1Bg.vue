<script setup>
import WalkingTank from '@/components/business/WalkingTank.vue'

defineProps({
  showTank: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="game-intro-1-movie">
    <img
      class="game-intro-1-movie__bg"
      src="@/assets/intro1-bg.gif"
      width="636"
      height="430"
    />
    <WalkingTank active :class="{ show: showTank }" />
  </div>
</template>
<style lang="scss">
.game-intro-1-movie {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .tank {
    z-index: 2;
    position: absolute;
    top: 50%;
    right: 100%;
    width: 220px;
    height: 89px;
    transform: translate(65%, -20%);
    transition: right 1s linear;

    @include breakpoint('mobile') {
      width: 263px;
      height: 106px;
    }
    @include breakpoint('laptop') {
      width: 336px;
      height: 135px;
      transform: translate(65%, -33%);
    }

    &.show {
      right: 50%;
    }
  }
  &__bg {
    @extend .img--fluid;
    vertical-align: bottom;
  }
}
</style>
