import { ref } from 'vue'

export const useFlick = (props) => {
  const flickState = ref(false)

  const flick = () => {
    if (props.flick) {
      flickState.value = true
    }
  }

  return {
    flick,
    flickState,
  }
}
