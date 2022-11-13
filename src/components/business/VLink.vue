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
  lock: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
})
const { flick, isFlicking } = useFlick(props)

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
  if (isFlicking.value) {
    baseClass.push('flick')
  }

  if (props.lock) {
    baseClass.push('lock')
  }

  if (props.active) {
    baseClass.push('active')
  }

  return baseClass
})
</script>
<template>
  <a :class="linkClass" @click.prevent="navigate">
    <slot :flick-state="isFlicking"></slot>
  </a>
</template>
<style lang="scss"></style>
