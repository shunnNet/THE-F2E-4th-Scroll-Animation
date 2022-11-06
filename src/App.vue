<script setup>
import { globalLoading } from '@/store/common.js'
import GlobalLoading from '@/components/business/GlobalLoading.vue'
import NavBar from '@/components/business/NavBar.vue'
import SiteBanner from '@/components/business/SiteBanner.vue'
import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

const { height: windowHeight } = useWindowSize()

const navBarHeight = ref(56)
const siteBannerHeight = computed(() => windowHeight.value - navBarHeight.value)
</script>
<template>
  <NavBar :height="navBarHeight" />
  <SiteBanner :height="siteBannerHeight" />
  <GlobalLoading :show="globalLoading" />
</template>

<style lang="scss">
#app {
  height: 300vh;
}
</style>
