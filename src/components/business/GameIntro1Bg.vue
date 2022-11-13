<script setup>
import { computed, onMounted } from 'vue'
import { useProgressor } from '@/composition/useProgressor.js'
import { repeat } from '@/utils/promise.js'
import WalkingTank from '@/components/business/WalkingTank.vue'

defineProps({
  showTank: {
    type: Boolean,
    default: false,
  },
})

const { progress, runner } = useProgressor()
const [exec] = repeat(
  async () => {
    await runner.run(700, 1)
    progress.value = 0
  },
  Infinity,
  0
)
onMounted(() => {
  exec()
})

const bgState = computed(() => {
  if (progress.value <= 25) {
    return 1
  }
  if (progress.value > 25 && progress.value <= 50) {
    return 2
  }
  if (progress.value > 50 && progress.value <= 75) {
    return 3
  }
  if (progress.value > 75 && progress.value <= 100) {
    return 4
  }
  return 1
})
</script>
<template>
  <div class="game-intro-1-movie">
    <img
      class="game-intro-1-moive__bg"
      :src="`/intro1-bg-${bgState}.png`"
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
