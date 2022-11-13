<script setup>
import SiteLogo from '@/components/business/SiteLogo.vue'
import Bars from '@/assets/Bars.svg?component'
import CollapseTransition from '@/components/common/CollapseTransition.vue'
import { overTablet, overMobile } from '@/store/breakpoints.js'
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'
import { useLoadingNavigate } from '@/composition/useLoadingNavigate.js'

const { loadingNavigate } = useLoadingNavigate()
defineProps({
  height: {
    type: Number,
    required: true,
  },
})

const links = [
  { text: '關卡資訊', href: 'https://2022.thef2e.com/news' },
  { text: '作品列表', href: 'https://2022.thef2e.com/works' },
  { text: '求職專區', href: 'https://2022.thef2e.com/jobs' },
]

const showCollapse = ref(false)
const { y: scrollY } = useWindowScroll()

watch(overTablet, (isOverTablet) => {
  if (isOverTablet) {
    showCollapse.value = false
  }
})
watch(scrollY, () => {
  showCollapse.value = false
})
</script>
<template>
  <nav class="navbar" :style="{ '--navbar-height': `${height}px` }">
    <div class="navbar__wrap">
      <div class="navbar__logo-group">
        <VLink class="navbar__logo-wrap" href="/" theme="secondary" flick>
          <SiteLogo class="navbar__logo" />
        </VLink>
        <div class="navbar__links" v-if="overTablet">
          <VLink
            class="navbar__link-item"
            v-for="l in links"
            :key="l"
            :href="l.href"
            theme="dark"
            flick
          >
            {{ l.text }}
          </VLink>
        </div>

        <Bars
          class="navbar__toggler"
          v-if="!overTablet"
          @click="showCollapse = !showCollapse"
        />
      </div>
      <div>
        <VButton
          class="navbar__button"
          :size="overMobile ? '' : 'mini'"
          flick
          @click="loadingNavigate('https://2022.thef2e.com/signup')"
          >註冊報名</VButton
        >
        <VButton
          v-if="overTablet"
          class="navbar__button"
          flick
          @click="loadingNavigate('https://2022.thef2e.com/login')"
          >登入</VButton
        >
      </div>
    </div>
  </nav>
  <CollapseTransition v-if="!overTablet" :collapse="showCollapse">
    <div class="navbar__collapse">
      <div class="navbar__collapse-item" v-for="l in links" :key="l">
        <VLink
          class="navbar__link-item navbar__link-item-collapse"
          :href="l.href"
          theme="dark"
          flick
        >
          {{ l.text }}
        </VLink>
      </div>
      <div class="navbar__collapse-item">
        <VButton
          class="navbar__button w-full"
          flick
          @click="loadingNavigate('https://2022.thef2e.com/login')"
          >登入</VButton
        >
      </div>
    </div>
  </CollapseTransition>
</template>
<style lang="scss">
.navbar {
  --navbar-height: 56px;
  background-color: theme-color(primary);
  color: theme-color(dark);
  &__wrap {
    @extend .container;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include breakpoint('tablet') {
      justify-content: flex-end;
    }
  }
  &__logo {
    color: inherit;
    &-group {
      display: flex;
      align-items: center;
      height: 100%;
    }
    &-wrap {
      height: var(--navbar-height);
      display: flex;
      align-items: center;
      margin-right: 30px;
    }
  }

  &__links {
    display: block;
    @include breakpoint('tablet') {
      display: flex;
      margin-right: 30px;
    }
  }

  &__link-item {
    display: block;
    line-height: var(--navbar-height);

    @include breakpoint('tablet') {
      padding: 0;
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }
  &__link-item-collapse {
    display: block;
    padding: 20px 0;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
  }

  &__collapse {
    background-color: theme-color(primary);
    padding-bottom: 10px;
    &-item {
      padding: 0 25px;
    }
  }

  &__button {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__toggler {
    cursor: pointer;
    color: theme-color(secondary);

    width: 40px;
    height: 40px;
  }
}
</style>
