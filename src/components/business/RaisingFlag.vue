<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
})

const flagState = computed(() => {
  if (props.progress <= 33) {
    return 1
  }
  if (props.progress > 33 && props.progress <= 66) {
    return 2
  }
  if (props.progress > 66 && props.progress <= 99) {
    return 3
  }
  return 4
})
</script>
<template>
  <img
    class="raising-flag"
    :src="`/flag-${flagState}.png`"
    width="114"
    height="229"
  />
</template>
<style lang="scss">
.raising-flag {
  @extend .img--fluid;
  vertical-align: bottom;
}
</style>
