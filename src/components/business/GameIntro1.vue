<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import GameIntro1Bg from '@/components/business/GameIntro1Bg.vue'
import { track } from '@/composition/useProgressor.js'
import EclipseFilter from '@/components/common/EclipseFilter.vue'
import { mapPercentToScale } from '@/utils/math.js'
import { overLaptop } from '@/store/breakpoints.js'

const trackSetting = {
  scroll: {
    start: 0,
    end: 50,
  },
}
</script>
<template>
  <ScrollRail :length="5000">
    <template v-slot="{ progress }">
      <div class="game-intro1">
        <div
          class="wrapper"
          :style="{
            transform: `translateY(${
              400 - mapPercentToScale(progress, 500)
            }px)`,
          }"
        >
          <EclipseFilter :progress="track(progress, trackSetting).scroll">
            <div class="intro-movie">
              <GameIntro1Bg class="bg" :show-tank="progress > 40" />
            </div>
            <TypingText
              v-if="!overLaptop"
              class="slogan"
              text="羨慕別人的酷酷網頁動畫..."
              :per-text="50"
              manual
              :manual-trigger="progress > 50"
            />
          </EclipseFilter>
          <div class="talk" v-show="progress > 60">
            <div class="text">
              <TypingText
                :per-text="50"
                text="I’m cool !"
                manual
                :manual-trigger="progress > 60"
              />
            </div>
          </div>
        </div>
        <TypingText
          v-if="overLaptop"
          class="slogan"
          text="羨慕別人的酷酷網頁動畫..."
          :per-text="50"
          manual
          :manual-trigger="progress > 30"
          :style="{
            transform: `translate(-50%, ${
              1000 - mapPercentToScale(progress, 1500)
            }px)`,
          }"
        />
      </div>
    </template>
  </ScrollRail>
</template>
<style lang="scss">
.game-intro1 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .slogan {
    display: block;
    text-align: center;
    margin-top: 40px;
    @include breakpoint('mobile') {
      margin-top: 98px;
    }

    @include breakpoint('laptop') {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0;
    }
  }
  .wrapper {
    position: relative;
    max-width: 980px;
    width: 100%;
  }
  .intro-movie {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 980px;
    width: 100%;
    padding: 55px 25px;
    background-color: theme-color(primary);
    @include breakpoint('laptop') {
      padding: 70px 172px;
    }
  }
  .bg {
    max-width: 636px;
    width: 100%;
    @include breakpoint('laptop') {
    }
  }
  .talk {
    position: absolute;
    width: 260px;
    top: -6px;
    right: 0;
    padding-bottom: 24px;
    z-index: 2;
    background-image: url('@/assets/intro1-talk.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    .text {
      color: theme-color(dark);
      text-align: center;
      font-size: 16px;
      line-height: 40px;
      height: 40px;
    }

    @include breakpoint('mobile') {
      top: -22px;
      right: 0;
      width: 305px;
      padding-bottom: 30px;
      .text {
        font-size: 24px;
        line-height: 50px;
        height: 50px;
      }
    }

    @include breakpoint('tablet') {
      top: -44px;
      width: 390px;
      padding-bottom: 40px;
      .text {
        font-size: 36px;
        line-height: 77px;
        height: 77px;
      }
    }
  }
}
</style>
