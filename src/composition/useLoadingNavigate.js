import { globalLoading } from '@/store/common.js'
import { delayNavigate } from '@/utils/browser.js'

export const useLoadingNavigate = () => {
  const loadingNavigate = (href) => {
    setTimeout(() => {
      globalLoading.value = true
    }, 300)
    delayNavigate(href)
  }

  return { loadingNavigate }
}
