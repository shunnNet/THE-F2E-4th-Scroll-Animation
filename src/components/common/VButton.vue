<script setup>
import { computed, defineProps, ref } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '',
    validator: (val) => {
      return ['mini', 'large', '', 'expand'].includes(val)
    },
  },
  flick: {
    type: Boolean,
    default: false,
  },
})

const flickState = ref(false)

const buttonClass = computed(() => {
  const baseClass = ['v-button']

  if (props.size) {
    baseClass.push(`v-button--${props.size}`)
  }
  if (flickState.value) {
    baseClass.push('flick')
  }

  return baseClass
})

const flick = () => {
  if (props.flick) {
    flickState.value = true
  }
}
</script>
<template>
  <button :class="buttonClass" @click="flick">
    <slot></slot>
  </button>
</template>
