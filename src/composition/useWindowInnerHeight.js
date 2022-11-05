import { ref, onUnmounted } from 'vue'

export const useWindowInnerHeight = () => {
  const windowHeight = ref(window.innerHeight)
  const handler = () => {
    windowHeight.value = window.innerHeight
  }
  window.addEventListener('resize', handler)
  onUnmounted(() => {
    window.removeEventListener('resize', handler)
  })

  return {
    windowHeight,
  }
}
