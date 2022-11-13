<script setup>
import tankSideGif from '@/assets/tank-side.gif'
import tankSide from '@/assets/tank-side.png'
import tankGif from '@/assets/tank.gif'
import tank from '@/assets/tank-1.png'
import { computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'side',
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const tankImageUrl = computed(() => {
  switch (props.mode) {
    case 'normal':
      return { static: tank, gif: tankGif }
    case 'side':
      return { static: tankSide, gif: tankSideGif }
    default:
      return 'tank'
  }
})
</script>
<template>
  <div class="tank" :class="{ active }">
    <img class="tank__static img--fluid" :src="tankImageUrl.static" />
    <img class="tank__active img--fluid" :src="tankImageUrl.gif" />
  </div>
</template>
<style lang="scss">
.tank {
  position: relative;
  &__static,
  &__active {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__static {
    z-index: 2;
  }
  &__active {
    z-index: 1;
    opacity: 0;
  }

  &.active {
    .tank__static {
      opacity: 0;
    }
    .tank__active {
      opacity: 1;
    }
  }
}
</style>
