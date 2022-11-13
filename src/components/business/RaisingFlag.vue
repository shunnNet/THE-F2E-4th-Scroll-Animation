<script setup>
import { computed } from 'vue'
import flag1 from '@/assets/flag-1.png'
import flag2 from '@/assets/flag-2.png'
import flag3 from '@/assets/flag-3.png'
import flag4 from '@/assets/flag-4.png'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
})

const flagSrc = computed(() => {
  if (props.progress <= 33) {
    return flag1
  }
  if (props.progress > 33 && props.progress <= 66) {
    return flag2
  }
  if (props.progress > 66 && props.progress <= 99) {
    return flag3
  }
  return flag4
})
</script>
<template>
  <img class="raising-flag" :src="flagSrc" width="114" height="229" />
</template>
<style lang="scss">
.raising-flag {
  @extend .img--fluid;
  vertical-align: bottom;
}
</style>
