<script setup>
import { globalLoading } from '@/store/common.js'
import GlobalLoading from '@/components/business/GlobalLoading.vue'
import NavBar from '@/components/business/NavBar.vue'
import SiteBanner from '@/components/business/SiteBanner.vue'
import SectionReview from '@/components/business/SectionReview.vue'
import SectionReward from '@/components/business/SectionReward.vue'
import SectionFaq from '@/components/business/SectionFaq.vue'
import DiamondSponser from '@/components/business/DiamondSponser.vue'
import SectionComingSlogan from '@/components/business/SectionComingSlogan.vue'
import SectionEventProcess from '@/components/business/SectionEventProcess.vue'
import SectionMountainView from '@/components/business/SectionMountainView.vue'
import SectionPerWeek from '@/components/business/SectionPerWeek.vue'
import VButton from '@/components/business/VButton.vue'
import { delayNavigate } from '@/utils/browser.js'
import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue'

const { height: windowHeight } = useWindowSize()

const navBarHeight = ref(56)
const siteBannerHeight = computed(() => windowHeight.value - navBarHeight.value)
</script>
<template>
  <NavBar :height="navBarHeight" />
  <SiteBanner :height="siteBannerHeight" />
  <SectionMountainView class="layout-section-mountain-view" />
  <SectionPerWeek />
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
        @click="delayNavigate('https://2022.thef2e.com/signup')"
        >立即註冊報名!</VButton
      >
    </div>
  </div>

  <DiamondSponser />
  <GlobalLoading :show="globalLoading" />
</template>

<style lang="scss">
.layout {
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
    margin-top: 200px;
    @include breakpoint('tablet') {
      margin-top: 450px;
      margin-bottom: 140px;
    }
  }
  &-section-mountain-view {
    margin-bottom: 316px;
    @include breakpoint('tablet') {
      margin-bottom: 490px;
    }
  }
}
</style>
