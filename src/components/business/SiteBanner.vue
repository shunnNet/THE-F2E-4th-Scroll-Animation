<script setup>
import BannerLogoUrl from '@/assets/BannerLogo.png'
import BannerLogoSmUrl from '@/assets/BannerLogo-sm.png'
import GameMenuItem from '@/components/business/GameMenuItem.vue'
import GameMenu from '@/components/business/GameMenu.vue'
import { ref, watch } from 'vue'
import { onKeyDown, useWindowScroll } from '@vueuse/core'

defineProps({
  height: {
    type: Number,
    required: true,
  },
})

const animationComplete = ref(false)
const onAnimationEnd = () => {
  animationComplete.value = true
}
const { y: scrollY } = useWindowScroll()

watch(scrollY, () => {
  if (!animationComplete.value) {
    onAnimationEnd()
  }
})

onKeyDown('ArrowDown', (e) => {
  if (!animationComplete.value) {
    e.preventDefault()
    onAnimationEnd()
  }
})
onKeyDown('ArrowUp', (e) => {
  if (!animationComplete.value) {
    e.preventDefault()
    onAnimationEnd()
  }
})
onKeyDown('Enter', (e) => {
  if (!animationComplete.value) {
    e.preventDefault()
    onAnimationEnd()
  }
})
</script>
<template>
  <div
    :style="{ height: `${height}px` }"
    class="site-banner"
    :class="{ 'site-banner--complete': animationComplete }"
    @animationend="onAnimationEnd"
  >
    <div class="site-banner__status-bar">
      <span>I- 00</span>
      <span>HI- 99999</span>
      <span>Hex School</span>
    </div>
    <div class="site-banner__logo">
      <picture>
        <source
          width="1048"
          height="212"
          :srcset="BannerLogoUrl"
          media="(min-width: 768px)"
        />
        <source
          width="589"
          height="119"
          :srcset="BannerLogoSmUrl"
          media="(min-width: 0px)"
        />
        <img
          class="img--fluid"
          :src="BannerLogoUrl"
          width="1048"
          height="212"
        />
      </picture>
    </div>

    <div class="site-banner__menu">
      <GameMenu :lock="!animationComplete">
        <GameMenuItem href="https://2022.thef2e.com/login">LOG IN</GameMenuItem>
        <GameMenuItem href="https://2022.thef2e.com/signup"
          >SIGN UP</GameMenuItem
        >
      </GameMenu>
    </div>

    <footer class="site-banner__footer text-center">
      Interactive And Responsive Web Design.
    </footer>
  </div>
</template>
<style lang="scss">
// TODO: make me more responsive
.site-banner {
  position: relative;
  @extend .container;
  padding-top: 24px;
  @include breakpoint('tablet') {
    padding-left: 57px;
    padding-right: 57px;
  }
  animation-name: game-opening;
  animation-duration: 5s;
  animation-timing-function: linear;
  overflow-y: hidden;

  &__status-bar {
    @extend .h6;
    display: flex;
    justify-content: space-between;

    @include breakpoint('tablet') {
      font-size: 36px;
      line-height: 42px;
    }
  }

  &__logo {
    // TO UI: 這邊設計稿是定絕對高度，可是在長度比較短的手機會跑太中間，先用 vh 代替
    margin: 0 auto;
    margin-top: 18vh;
    @include max-box(589px);

    @include breakpoint('tablet') {
      @include max-box(1048px);
      margin-top: 10vh;
    }
  }
  &__menu {
    display: flex;
    justify-content: center;
    margin-top: 87px;

    @include breakpoint('tablet') {
      margin-top: 110px;
    }
  }

  &__footer {
    @extend .h6;
    @extend .container;
    position: absolute;
    bottom: 5vh;
    left: 0;
    @include breakpoint('tablet') {
      font-size: 36px;
      line-height: 42px;
      margin-top: 103px;
    }
  }
  &--complete {
    animation-name: none;
  }
}
@keyframes game-opening {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
