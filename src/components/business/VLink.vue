<script setup>
import { computed } from 'vue'
import { useFlick } from '@/composition/useFlick.js'
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: '',
  },

  flick: {
    type: Boolean,
    default: false,
  },
})
const { flick, flickState } = useFlick(props)

const navigate = () => {
  if (props.flick) {
    flick()
    setTimeout(() => {
      window.location.href = props.href
    }, 500)
  } else {
    window.location.href = props.href
  }
}

const linkClass = computed(() => {
  const baseClass = ['v-link']

  if (props.theme) {
    baseClass.push(`v-link--${props.theme}`)
  }
  if (flickState.value) {
    baseClass.push('flick')
  }

  return baseClass
})
</script>
<template>
  <a :class="linkClass" @click.prevent="navigate">
    <slot></slot>
  </a>
</template>
<style lang="scss"></style>
