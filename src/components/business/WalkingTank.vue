<script setup>
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

const tankImageName = computed(() => {
  switch (props.mode) {
    case 'normal':
      return 'tank'
    case 'side':
      return 'tank-side'
    default:
      return 'tank'
  }
})
</script>
<template>
  <div class="tank" :class="{ active }">
    <img class="tank__static img--fluid" :src="`/${tankImageName}.png`" />
    <img class="tank__active img--fluid" :src="`/${tankImageName}.gif`" />
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
