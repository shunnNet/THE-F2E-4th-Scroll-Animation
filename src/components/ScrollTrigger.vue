<script setup>
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref, defineProps } from 'vue'
import { minmax } from '@/utils/math.js'

const { y } = useWindowScroll()

const props = defineProps({
  length: {
    type: [Number, String, Function],
    default: 0,
  },
})

let orbital = ref(null)

let windowHeight = ref(window.innerHeight)

const length = computed(() => {
  if (!orbital.value) {
    return 1
  }
  if (props.length === 'element') {
    return orbital.value.clientHeight
  }
  if (props.length === 'window') {
    return windowHeight.value
  }
  if (typeof props.length === 'number' && props.length > 0) {
    return props.length
  }

  if (typeof props.length === 'function') {
    return props.length(orbital.value, windowHeight.value)
  }

  return 200
})

const defineStartPosition = () => orbital.value.offsetTop
const defineEndPosition = () =>
  orbital.value.offsetTop + orbital.value.clientHeight

let startPosition = ref(0)
let endPosition = ref(0)

onMounted(() => {
  startPosition.value = defineStartPosition()
  endPosition.value = defineEndPosition()
})
window.addEventListener('resize', () => {
  startPosition.value = defineStartPosition()
  endPosition.value = defineEndPosition()
  windowHeight.value = window.innerHeight
})

const progress = computed(() =>
  minmax(0, ((y.value - startPosition.value) / length.value) * 100, 100)
)
</script>

<template>
  <div ref="orbital" :progress="progress" :length="length">
    <slot :progress="progress"></slot>
  </div>
</template>
