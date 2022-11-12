export const minmax = (min, value, max) => {
  if (value <= min) {
    return min
  }
  if (value >= max) {
    return max
  }
  return value
}

export const limitToMin = (value, min) => {
  if (value <= min) {
    return min
  }
  return value
}

export const limitToMax = (value, max) => {
  if (value >= max) {
    return max
  }
  return value
}
