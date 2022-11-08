<script setup>
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { minmax } from '@/utils/math.js'

const { y } = useWindowScroll()

const props = defineProps({
  length: {
    type: [Number, String, Function],
    default: 'element',
  },
  start: {
    type: [Number, String, Function],
    default: 'element',
  },
})

let orbital = ref(null)

let windowHeight = ref(window.innerHeight)

const handleLengthUnit = (value) => {
  if (value === 'element') {
    return orbital.value.clientHeight
  }
  if (value === 'window') {
    return windowHeight.value
  }
  if (typeof value === 'number' && value > 0) {
    return value
  }
  if (typeof value === 'function') {
    return value(orbital.value, windowHeight.value)
  }

  return value
}

const length = computed(() => {
  if (!orbital.value) {
    return 1
  }
  return handleLengthUnit(props.length)
})

const defineStartPosition = () =>
  orbital.value.offsetTop - handleLengthUnit(props.start)
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
    <slot :progress="progress" :is-active="progress > 0"></slot>
  </div>
</template>
