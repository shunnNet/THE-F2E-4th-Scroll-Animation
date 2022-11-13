<script setup>
import { globalLoading, windowHeight } from '@/store/common.js'
import GlobalLoading from '@/components/business/GlobalLoading.vue'
import NavBar from '@/components/business/NavBar.vue'
import SiteBanner from '@/components/business/SiteBanner.vue'
import SectionIntro from '@/components/business/SectionIntro.vue'
import SectionReview from '@/components/business/SectionReview.vue'
import SectionReward from '@/components/business/SectionReward.vue'
import SectionFaq from '@/components/business/SectionFaq.vue'
import DiamondSponser from '@/components/business/DiamondSponser.vue'
import SectionComingSlogan from '@/components/business/SectionComingSlogan.vue'
import SectionEventProcess from '@/components/business/SectionEventProcess.vue'
import SectionMountainView from '@/components/business/SectionMountainView.vue'
import SectionPerWeek from '@/components/business/SectionPerWeek.vue'
import VButton from '@/components/business/VButton.vue'

import { computed, onMounted, ref } from 'vue'
import { useLoadingNavigate } from '@/composition/useLoadingNavigate.js'

const { loadingNavigate } = useLoadingNavigate()
const appStarted = ref(false)

const navBarHeight = ref(56)
const siteBannerHeight = computed(() => windowHeight.value - navBarHeight.value)

globalLoading.value = true
onMounted(() => {
  setTimeout(() => {
    globalLoading.value = false
    appStarted.value = true
  }, 2000)
})
</script>
<template>
  <NavBar :height="navBarHeight" />
  <SiteBanner :height="siteBannerHeight" v-if="appStarted" />
  <SectionIntro class="layout-section-intro" />
  <SectionMountainView class="layout-section-mountain-view" />
  <SectionPerWeek class="layout-section-per-week" />
  <SectionEventProcess class="layout-section-event-process" />
  <SectionComingSlogan class="layout-section-coming-slogan" />
  <SectionReview class="layout-section-review" />
  <SectionReward class="layout-section-reward" />
  <SectionFaq class="layout-section-faq" />
  <div class="layout-section-registration">
    <div class="container">
      <VButton
        size="expand"
        flick
        @click="loadingNavigate('https://2022.thef2e.com/signup')"
        >立即註冊報名!</VButton
      >
    </div>
  </div>

  <DiamondSponser />
  <GlobalLoading :show="globalLoading" />
</template>

<style lang="scss">
.layout {
  &-section-intro {
    margin-bottom: 96px;
    @include breakpoint('laptop') {
      margin-bottom: 450px;
    }
  }
  &-section-mountain-view {
    margin-bottom: 316px;
    @include breakpoint('tablet') {
      margin-bottom: 490px;
    }
  }
  &-section-per-week {
    margin-bottom: 200px;
    @include breakpoint('tablet') {
      margin-bottom: 300px;
    }
  }
  &-section-review {
    margin-bottom: 100px;
    @include breakpoint('tablet') {
      margin-bottom: 223px;
    }
  }
  &-section-reward {
    margin-bottom: 200px;
    @include breakpoint('tablet') {
      margin-bottom: 534px;
    }
  }
  &-section-faq {
    margin-bottom: 200px;
    @include breakpoint('tablet') {
      margin-bottom: 250px;
    }
  }
  &-section-registration {
    margin-bottom: 200px;
  }

  &-section-coming-slogan {
    margin-bottom: 200px;

    @include breakpoint('tablet') {
      margin-bottom: 140px;
    }
  }
}
</style>
