<script setup>
import SlidingDoor from '@/components/SlidingDoor.vue'
// import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'
import ScrollTrigger from '@/components/ScrollTrigger.vue'
import { useWindowInnerHeight } from '@/composition/useWindowInnerHeight.js'
import { minmax } from '@/utils/math'

// const { y } = useWindowScroll()
const { windowHeight } = useWindowInnerHeight()

const doorOrbitalHeight = computed(() => 3 * windowHeight.value)

const settings = {
  A: {
    start: 0,
    end: 100 / 2,
  },
  B: {
    start: 100 / 2,
    end: (100 / 2) * 2,
  },
}

const cal = (progress) => {
  const result = {}
  Object.entries(settings).forEach(([name, setting]) => {
    let range = setting.end - setting.start
    let p = progress - setting.start

    result[name] = minmax(0, (p / range) * 100, 100)
  })
  return result
}
</script>
<template>
  <ScrollTrigger
    class="door-group"
    :style="{
      height: `${doorOrbitalHeight}px`,
    }"
    :length="doorOrbitalHeight - windowHeight"
    v-slot="{ progress }"
  >
    <span :test="progress"></span>
    <div class="door-group-inner">
      <SlidingDoor
        disabled
        background="https://2022.thef2e.com/_nuxt/img/week3.5dd41cb.png"
        background-color="rgb(153,103,246)"
      />
      <SlidingDoor
        :progress="cal(progress).B"
        background="https://2022.thef2e.com/_nuxt/img/week2.1df097b.png"
        background-color="rgb(121,234,238)"
      />
      <SlidingDoor
        :progress="cal(progress).A"
        background="https://2022.thef2e.com/_nuxt/img/week1.879c8cb.png"
        background-color="rgb(248, 204,70)"
      />
    </div>
  </ScrollTrigger>
</template>
<style lang="scss">
.door-group {
  position: relative;
}
.door-group-inner {
  position: sticky;
  filter: opacity(1);
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
