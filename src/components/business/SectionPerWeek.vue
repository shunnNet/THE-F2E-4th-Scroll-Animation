<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import RaisingFlag from '@/components/business/RaisingFlag.vue'
import WalkingTank from '@/components/business/WalkingTank.vue'
import { ref, watch } from 'vue'
import { useProgressor } from '@/composition/useProgressor.js'

const flagsAnimation = ref(
  Array(3)
    .fill(null)
    .map(() => {
      return {
        ...useProgressor(),
      }
    })
)
const frameIndex = ref(0)
watch(frameIndex, (val) => {
  flagsAnimation.value.forEach((progressor, index) => {
    progressor.runner.run(1000, val >= index ? 1 : 0)
  })
})

const defineBackgroundColor = (frameIndex) => {
  switch (frameIndex) {
    case 0:
      return '#b82a06'
    case 1:
      return '#76B9D6'
    case 2:
    case 3:
      return '#215400'
    default:
      return '#b82a06'
  }
}
const defineWrapperTranslate = (frameIndex) => {
  switch (frameIndex) {
    case 0:
      return '0%'
    case 1:
      return `${100 / 3}%`
    case 2:
    case 3:
      return `${(100 / 3) * 2}%`
    default:
      return `${(100 / 3) * 2}%`
  }
}
const tankRunning = ref(false)
const tankRun = (state = true) => {
  tankRunning.value = state
}
</script>
<template>
  <ScrollRail
    :length="12000"
    :frame-rate="3"
    @frame-change="frameIndex = $event"
  >
    <template v-slot="{ frame }">
      <div
        class="section-per-week"
        :style="{
          backgroundColor: defineBackgroundColor(frame.index),
        }"
      >
        <div class="tank-wrap">
          <WalkingTank mode="side" class="tank" :active="tankRunning" />
        </div>
        <div
          class="wrapper"
          :style="{
            transform: `translateX(-${defineWrapperTranslate(frame.index)})`,
          }"
          @transitionstart="tankRun(true)"
          @transitionend="tankRun(false)"
        >
          <div class="route-wrap">
            <div class="route"></div>
          </div>

          <div class="week-group">
            <section class="week week-1">
              <h2 class="week__number">WEEK 1</h2>
              <h3 class="week__title">The F2E 活動網站設計</h3>
              <p class="week__feature">視差滾動</p>
              <p class="week__company">#版塊設計</p>
              <RaisingFlag class="week__flag" :progress="100" />
            </section>
            <section class="week week-2">
              <h2 class="week__number">WEEK 2</h2>
              <h3 class="week__title">今晚，我想來點點簽</h3>
              <p class="week__feature">canvas</p>
              <p class="week__company">#凱鈿行動科技</p>
              <RaisingFlag
                class="week__flag"
                :progress="flagsAnimation[1].progress"
              />
            </section>
            <section class="week week-3">
              <h2 class="week__number">WEEK 3</h2>
              <h3 class="week__title">Scrum 新手村</h3>
              <p class="week__feature">JS draggable</p>
              <p class="week__company">#鈦坦科技</p>
              <RaisingFlag
                class="week__flag"
                :progress="flagsAnimation[2].progress"
              />
            </section>
          </div>
        </div>
      </div>
    </template>
  </ScrollRail>
</template>
<style lang="scss">
.section-per-week {
  background-color: theme-color(primary);
  transition: background-color 0.5s linear;
  height: 100%;
  overflow-x: hidden;

  .wrapper {
    position: relative;
    width: 300%;
    height: 100%;
    transition: transform 0.5s;
    transition-timing-function: linear;
  }
  .route-wrap {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .route {
    width: 66.666666%;
    margin: 0 auto;
    border-bottom: 5px dashed rgba(255, 255, 255, 0.5);
    transform: translateY(255px);
  }
  .tank-wrap {
    position: absolute;
    z-index: 5;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tank {
    transform: translate(37px, 221px);
    width: 207px;
    height: 83px;
  }
  .week-group {
    display: flex;

    width: 100%;
    height: 100%;
  }
  .week {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &__number {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 18px;
    }
    &__title {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 97px;
    }
    &__feature {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 31px;
    }
    &__company {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 50px;
    }
    &__flag {
      width: 140px;
      height: 229px;
      transform: translateX(-12%);
    }
  }
  .week-1 {
    background-image: url('/week1-bg.png');
    .week__number {
      color: theme-color(primary-light);
    }
  }
  .week-2 {
    background-image: url('/week2-bg.png');
    .week__number {
      color: #0061a1;
    }
  }
  .week-3 {
    background-image: url('/week3-bg.png');
    .week__number {
      color: #c7ffa3;
    }
  }
}
</style>
