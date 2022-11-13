<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import { track } from '@/composition/useProgressor.js'
import { mapPercentToScale } from '@/utils/math.js'
import EclipseFilter from '@/components/common/EclipseFilter.vue'
import { overLaptop, overTablet } from '@/store/breakpoints.js'

const trackSetting = {
  filter: {
    start: 0,
    end: 50,
  },
  soldierMove: {
    start: 40,
    end: 60,
  },
  talk: {
    start: 60,
    end: 70,
  },
}

const soldierMove = (progress) => {
  const trackProgress = track(progress, trackSetting).soldierMove

  const x = 255 - mapPercentToScale(trackProgress, 255)
  const y = 200 - mapPercentToScale(trackProgress, 200)
  return `translate3d( ${x}px,${y}px,0 )`
}
</script>
<template>
  <ScrollRail :length="5000">
    <template v-slot="{ progress }">
      <EclipseFilter
        :progress="track(progress, trackSetting).filter"
        direction="toLeft"
        class="game-intro2"
      >
        <div
          class="w-full"
          :style="{
            transform: `translateY(${
              (overTablet ? 400 : 200) - mapPercentToScale(progress, 500)
            }px)`,
          }"
        >
          <div class="wrapper">
            <div class="intro-movie">
              <img
                class="soldier"
                width="610"
                height="589"
                src="@/assets/intro2-soldier.png"
                :style="{
                  transform: soldierMove(progress),
                }"
              />
              <div
                class="talk"
                v-show="progress > 60"
                :style="{
                  transform: `scale(${mapPercentToScale(
                    track(progress, trackSetting).talk,
                    1
                  )})`,
                }"
              >
                <div class="text">
                  <TypingText
                    text="要求變更規格！"
                    :per-text="50"
                    manual
                    :manual-trigger="progress > 70"
                  />
                </div>
              </div>
            </div>
          </div>
          <TypingText
            v-if="!overLaptop"
            class="slogan"
            text="滿足不了同事的許願..."
            :per-text="50"
            manual
            :manual-trigger="progress > 50"
          />
        </div>

        <TypingText
          v-if="overLaptop"
          class="slogan"
          text="滿足不了同事的許願..."
          :per-text="50"
          manual
          :manual-trigger="progress > 30"
          :style="{
            transform: `translate(-50%, ${
              1000 - mapPercentToScale(progress, 1500)
            }px)`,
          }"
        />
      </EclipseFilter>
    </template>
  </ScrollRail>
</template>
<style lang="scss">
.game-intro2 {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  .wrapper {
    position: relative;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;
  }
  .intro-movie {
    position: relative;
    background-color: theme-color(primary);
    max-width: 980px;
    width: 100%;
    height: 282px;
    @include breakpoint('tablet') {
      height: 447px;
    }

    @include breakpoint('laptop') {
      height: 570px;
    }
  }
  .soldier {
    position: absolute;

    width: auto;
    right: 10px;
    bottom: 0px;
    display: block;
    transform: translate3d(255px, 200px, 0);
    height: 300px;

    @include breakpoint('tablet') {
      right: 70px;
      height: 481px;
    }

    @include breakpoint('laptop') {
      height: 620px;
    }
  }
  .talk {
    position: absolute;

    top: -70px;
    z-index: 2;
    background-image: url('@/assets/intro2-talk.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 450px;
    padding-bottom: 7px;
    transform-origin: bottom right;
    transform: scale(0.1);

    left: unset;
    right: 23%;

    @include breakpoint('mobile') {
      top: -90px;
      padding-bottom: 11px;
      left: unset;
      right: 43%;
    }

    @include breakpoint('laptop') {
      left: -110px;
      right: unset;
    }

    .text {
      color: theme-color(dark);
      text-align: center;
      font-size: 16px;
      height: 80px;
      line-height: 80px;
      @include breakpoint('mobile') {
        font-size: 24px;
        height: 119px;
        line-height: 119px;
      }
      @include breakpoint('laptop') {
        font-size: 36px;
        line-height: 200px;
        height: 200px;
      }
    }
  }
  .slogan {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    @include breakpoint('mobile') {
      margin-top: 98px;
    }
    @include breakpoint('laptop') {
      width: auto;
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0;
    }
  }
}
</style>
