<script setup>
import tankUrl from '@/assets/tank-1.png'
import { computed, inject, ref } from 'vue'

defineProps({
  href: {
    type: String,
    default: '',
  },
  focus: {
    type: Boolean,
    default: false,
  },
})

const registItem = inject('registItem')
const setFocusItem = inject('setFocusItem')
const setSelectItem = inject('setSelectItem')
const menuItems = inject('menuItems')
const itemSelected = inject('itemSelected')

const vlinkRef = ref(null)

const index = ref(registItem(vlinkRef))
const states = computed(() => menuItems[index.value])
const shouldLock = computed(() => itemSelected.value && !states.value.selected)
</script>
<template>
  <VLink
    ref="vlinkRef"
    @mouseenter="setFocusItem(index)"
    @click="setSelectItem(index)"
    class="game-menu-item"
    :lock="shouldLock"
    :active="states.focus"
    :class="{ focus: states.focus }"
    :href="href"
    flick
  >
    <img
      class="game-menu-item__cursor"
      :src="tankUrl"
      width="428"
      height="236"
    />
    <div class="game-menu-item__text">
      <span class="game-menu-item__index" v-text="index + 1" />

      <slot></slot>
    </div>
  </VLink>
</template>
<style lang="scss">
.game-menu-item {
  position: relative;
  display: flex;
  align-items: center;
  &__cursor {
    position: absolute;
    transform: translateX(-100%);
    visibility: hidden;
    vertical-align: bottom;
    width: 50px;
    left: -20px;
    height: auto;
    @include breakpoint('mobile') {
      width: 68px;
      left: -34px;
    }
    @include breakpoint('tablet') {
      width: 86px;
      left: -42px;
    }
    &.flick {
      @include flicker(appear);
    }
  }

  &__index {
    margin-right: 30px;
  }

  &__text {
    font-size: 24px;
    line-height: 28px;
    @include breakpoint('mobile') {
      font-size: 36px;
      line-height: 42px;
    }

    @include breakpoint('tablet') {
      font-size: 42px;
      line-height: 49px;
    }
  }

  &.focus {
    .game-menu-item__cursor {
      visibility: visible;
    }
  }
}
</style>
