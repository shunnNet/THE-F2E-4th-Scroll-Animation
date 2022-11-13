<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import GameIntro1Bg from '@/components/business/GameIntro1Bg.vue'
import { track } from '@/composition/useProgressor.js'
import EclipseFilter from '@/components/common/EclipseFilter.vue'
import { mapPercentToScale } from '@/utils/math.js'

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
  align-items: center;
  .slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 36px;
    line-height: 42px;
    transform: translateX(-50%);
    $shadow: theme-color(secondary);
    text-shadow: -3px 0 $shadow, 0 3px $shadow, 3px 0 $shadow, 0 -3px $shadow;
  }
  .wrapper {
    position: relative;
    width: 980px;
  }
  .intro-movie {
    position: relative;
    width: 980px;
    height: 570px;
    background-color: theme-color(primary);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: visible;
  }
  .talk {
    position: absolute;
    z-index: 2;
    top: -44px;
    right: 0;
    width: 390px;

    background-image: url('@/assets/intro1-talk.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 40px;
    .text {
      color: theme-color(dark);
      text-align: center;

      font-size: 36px;
      line-height: 77px;
      height: 77px;
    }
  }
  .bg {
    width: 637px;
    height: 429px;
  }
}
</style>
