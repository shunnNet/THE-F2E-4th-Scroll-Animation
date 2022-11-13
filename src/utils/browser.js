export const delayNavigate = (href, delay = 500) => {
  setTimeout(() => {
    window.location.href = href
  }, delay)
}
