<script setup>
import {
  reactive,
  provide,
  onMounted,
  readonly,
  ref,
  computed,
  watch,
} from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { onKeyDown } from '@vueuse/core'

// TODO: make me more structure elegant

const props = defineProps({
  lock: {
    type: Boolean,
    default: false,
  },
})

const isVisible = ref(false)

const onIntersectionObserver = ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
}

const items = reactive([])
const focusedItemIndex = ref(0)

const registItem = (component) => {
  return (
    items.push({
      focus: false,
      selected: false,
      component,
    }) - 1
  )
}

const isLocked = computed(
  () => props.lock || !isVisible.value || itemSelected.value
)

const itemSelected = computed(() =>
  items.map((item) => item.selected).some((selected) => selected)
)
const setFocusItem = (itemIndex, force = false) => {
  if (isLocked.value && !force) {
    return
  }
  items.forEach((item) => (item.focus = false))
  items[itemIndex].focus = true
  focusedItemIndex.value = itemIndex
}

const setSelectItem = (itemIndex) => {
  if (isLocked.value) {
    return
  }
  setFocusItem(itemIndex)
  items[itemIndex].selected = true
}

provide('registItem', registItem)
provide('setFocusItem', setFocusItem)
provide('setSelectItem', setSelectItem)
provide('menuItems', readonly(items))
provide('itemSelected', itemSelected)

onMounted(() => {
  if (!props.lock) {
    start()
  }
})
watch(
  () => props.lock,
  (val) => {
    if (!val) {
      start()
    }
  }
)

const start = () => {
  if (items.length) {
    setFocusItem(0, true)
  }
}

onKeyDown('ArrowDown', (e) => {
  if (isLocked.value) {
    return
  }
  e.preventDefault()
  const nextValue = focusedItemIndex.value + 1

  setFocusItem(nextValue > items.length - 1 ? 0 : nextValue)
})
onKeyDown('ArrowUp', (e) => {
  if (isLocked.value) {
    return
  }
  e.preventDefault()
  const nextValue = focusedItemIndex.value - 1

  setFocusItem(nextValue < 0 ? items.length - 1 : nextValue)
})
onKeyDown('Enter', (e) => {
  if (isLocked.value) {
    return
  }
  e.preventDefault()

  items[focusedItemIndex.value].component.$el.click()
})
</script>
<template>
  <div class="game-menu" v-intersection-observer="onIntersectionObserver">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.game-menu {
  &-item {
    &:not(:last-child) {
      margin-bottom: 10px;
      @include breakpoint('tablet') {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
