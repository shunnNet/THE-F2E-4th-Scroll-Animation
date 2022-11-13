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
      class="game-intro-1-moive__bg"
      src="@/assets/intro1-bg.gif"
      width="637"
      height="429"
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
    top: 40%;
    right: 100%;
    width: 336px;
    height: 135px;

    transition: right 1s linear;

    &.show {
      right: 16%;
    }
  }
  &__bg {
    @extend .img--fluid;
    vertical-align: bottom;
  }
}
</style>
