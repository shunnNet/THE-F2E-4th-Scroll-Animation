import { ref } from 'vue'

export const useFlick = (props) => {
  const isFlicking = ref(false)

  const flick = () => {
    if (props.flick) {
      isFlicking.value = true
    }
  }

  return {
    flick,
    isFlicking,
  }
}
