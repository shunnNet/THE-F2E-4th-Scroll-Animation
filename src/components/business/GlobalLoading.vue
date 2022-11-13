<script setup>
import WalkingTank from '@/components/business/WalkingTank.vue'
import { watch } from 'vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

if (props.show) {
  document.body.classList.add('overflow-hidden')
}

watch(
  () => props.show,
  (show) => {
    if (show) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)
</script>
<template>
  <div class="global-loading" v-if="show">
    <div class="global-loading__text">Loading.<typingText text=".." /></div>
    <WalkingTank class="global-loading__tank" active />
  </div>
</template>
<style lang="scss">
.global-loading {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    width: 160px;
    font-size: 36px;
    line-height: 56px;
    margin-bottom: 30px;
  }
  &__tank {
    width: 164px;
    height: 66px;
  }
}
</style>
