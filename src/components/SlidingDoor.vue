<script>
import { computed } from 'vue'

export default {
  props: {
    threshold: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 1000,
    },
    background: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const move = computed(() => {
      if (props.disabled) {
        return 0
      }
      if (props.progress < 0) {
        return 0
      }
      if (props.progress > 100) {
        return 100
      }

      return props.progress
      // return y.value > props.threshold
      //   ? ((y.value - props.threshold) / props.height) * 100
      //   : 0
    })

    return {
      move,
    }
  },
}
</script>
<template>
  <div class="sliding-door">
    <div
      class="sliding-door__door"
      :style="{
        backgroundImage: `url('${background}')`,
        transform: `translateY(${-move}%)`,
      }"
    ></div>
    <div
      class="sliding-door__door"
      :style="{
        backgroundColor: backgroundColor,
        transform: `translateY(${move}%)`,
      }"
    >
      progress: {{ progress }} move: {{ move }}
    </div>
  </div>
</template>
<style lang="scss">
.sliding-door {
  top: 0;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  &__door {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    flex: 1;
  }
}
</style>
