<script setup>
import ScrollTrigger from '@/components/ScrollTrigger.vue'
import { useWindowSize } from '@vueuse/core'

const { height: windowHeight } = useWindowSize()

defineProps({
  length: {
    type: [Number],
    default: 2000,
  },
})
</script>
<template>
  <ScrollTrigger
    class="scroll-rail"
    start="window"
    :length="length - windowHeight"
    :style="{ height: `${length}px` }"
    v-slot="{ progress, isActive }"
  >
    <div class="scroll-rail__car" :style="{ height: `${windowHeight}px` }">
      <slot :progress="progress" :is-active="isActive" />
    </div>
  </ScrollTrigger>
</template>
<style lang="scss">
.scroll-rail {
  &__car {
    position: sticky;
    top: 0;
    width: 100%;
    overflow: hidden;
  }
}
</style>
