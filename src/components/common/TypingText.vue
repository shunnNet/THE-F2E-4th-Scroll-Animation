<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { promiseWaterfall, sleep, repeat } from '@/utils/promise.js'

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  useCursor: {
    type: Boolean,
    default: false,
  },
  cursor: {
    type: String,
    default: '_',
    validator(val) {
      return ['|', '_', '｜', '＿'].includes(val)
    },
  },
  perText: {
    type: Number,
    default: 500,
  },
  repeatTimes: {
    type: Number,
    default: Infinity,
  },
  repeatDelay: {
    type: Number,
    default: 1000,
  },
})

const typingText = ref('')

onMounted(() => {
  repeat(
    () => {
      typingText.value = ''
      return promiseWaterfall(
        props.text.split('').map((charactor) => {
          return async () => {
            await sleep(props.perText)
            typingText.value += charactor
          }
        })
      )
    },
    props.repeatTimes,
    props.repeatDelay
  )
})
</script>

<template>
  <span class="typing-text">
    <span v-text="typingText" />
    <span class="typing-text__cursor" v-if="useCursor"> {{ cursor }} </span>
  </span>
</template>

<style lang="scss">
.typing-text {
  white-space: pre-line;
  &__cursor {
    @include flicker(flicker-appear, 0.2s);
  }
}

@keyframes flicker-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
