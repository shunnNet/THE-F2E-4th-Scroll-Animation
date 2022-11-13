<script setup>
import RaisingFlag from '@/components/business/RaisingFlag.vue'
import ScrollTrigger from '@/components/ScrollTrigger.vue'
import { useProgressor } from '@/composition/useProgressor.js'
import { ref } from 'vue'
import { useLoadingNavigate } from '@/composition/useLoadingNavigate.js'
import { overLaptop } from '@/store/breakpoints.js'

const { loadingNavigate } = useLoadingNavigate()

const processContents = [
  {
    title: 'SIGN UP!',
    content: [
      '開放報名：',
      '10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59',
      '',
      '截止前可修改報名組別。',
    ],
  },
  {
    title: 'START!',
    content: [
      '',
      '',
      '各組別開賽：',
      'UI組、團體組開賽 10/31、前端組開賽 11/7',
    ],
  },
  {
    title: 'UPLOAD!',
    content: [
      '',
      '',
      '登錄作品：',
      '10/31(一) 中午 12:00 - 11/28(一) 中午 12:00',
    ],
  },
  {
    title: 'STREAM!',
    content: [
      '資深開發者到來，直播分享零阻礙！',
      '',
      '線上直播：',
      '11/3 - 11/24（每週四）',
    ],
  },
]

const processRenderContents = ref(
  processContents.map((process) => {
    return {
      title: process.title,
      content: process.content.join('\n'),
    }
  })
)

const processAnimation = ref(
  Array(processContents.length)
    .fill(null)
    .map(() => {
      const { progress, runner } = useProgressor()
      return {
        textAnimation: false,
        progress,
        runner,
      }
    })
)

const run = (process, isActive) => {
  if (isActive) {
    process.textAnimation = true
    process.runner.run(1000, 1)
  } else {
    process.textAnimation = false
    process.runner.run(1000, 0)
  }
}
</script>
<template>
  <section class="section-event-process">
    <VButton
      :size="overLaptop ? 'large' : 'mini'"
      class="regist-button"
      @click="loadingNavigate('https://2022.thef2e.com/signup')"
      flick
      >點我註冊報名!</VButton
    >

    <div class="overflow-x-hidden">
      <div class="wrapper">
        <ScrollTrigger
          v-for="(process, index) in processRenderContents"
          :key="process.title"
          class="process"
          :style="{
            'align-items':
              index === 0
                ? 'flex-start'
                : index === processRenderContents.length - 1
                ? 'flex-end'
                : 'center',
          }"
          @state-change="run(processAnimation[index], $event)"
          :start="100"
        >
          <RaisingFlag
            class="flag"
            :progress="processAnimation[index].progress"
          />
          <div
            class="content"
            :class="{ enter: processAnimation[index].textAnimation }"
          >
            <h3 class="title">{{ process.title }}</h3>
            <p class="description" v-text="process.content" />
          </div>
        </ScrollTrigger>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.section-event-process {
  @extend .container;
  max-width: 604px;
  margin: 50px auto;

  @include breakpoint('laptop') {
    max-width: 1130px;
  }

  @include breakpoint('desktop-wide') {
    max-width: 1198px;
  }

  .wrapper {
    border-left: 5px dashed rgba(255, 255, 255, 0.5);
    margin-left: 56px;
    @include breakpoint('laptop') {
      margin-left: 90px;
    }
  }
  .process {
    display: flex;
    align-items: center;
    margin-left: -56px;
    @include breakpoint('laptop') {
      margin-left: -90px;
    }

    &:not(:last-child) {
      margin-bottom: 198px;
      @include breakpoint('laptop') {
        margin-bottom: 328px;
      }
    }
  }
  .flag {
    width: 85px;
    @include breakpoint('laptop') {
      width: 140px;
    }
  }
  .content {
    transform: translate3d(1000px, 0, 0);
    opacity: 0;
    transition: all 1s;
    width: 336px;
    margin-left: 43px;
    @include breakpoint('laptop') {
      width: 518px;
      margin-left: 70px;
    }
    &.enter {
      opacity: 1 !important;
      transform: translate3d(0, 0, 0) !important;
    }
  }

  .title {
    font-size: 36px;
    line-height: 42px;
    color: theme-color(primary-light);

    @include breakpoint('laptop') {
      font-size: 72px;
      line-height: 84px;
    }
  }
  .description {
    white-space: pre-line;
    font-size: 16px;
    @include breakpoint('laptop') {
      font-size: 24px;
    }
  }

  .regist-button {
    position: sticky;
    top: 100px;
    left: 100%;
    display: none;
    @include breakpoint('mobile') {
      display: block;
    }
  }
}
</style>
