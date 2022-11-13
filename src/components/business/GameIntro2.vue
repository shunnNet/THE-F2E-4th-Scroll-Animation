<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import { track } from '@/composition/useProgressor.js'
import { mapPercentToScale } from '@/utils/math.js'
import EclipseFilter from '@/components/common/EclipseFilter.vue'

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
          class="wrapper"
          :style="{
            transform: `translateY(${
              400 - mapPercentToScale(progress, 500)
            }px)`,
          }"
        >
          <div class="intro-movie">
            <img
              class="soldier"
              width="610"
              height="589"
              src="/intro2-soldier.png"
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
                  text="需求方改規格！"
                  :per-text="50"
                  manual
                  :manual-trigger="progress > 70"
                />
              </div>
            </div>
          </div>
        </div>
        <TypingText
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
  align-items: center;
  justify-content: flex-end;
  .wrapper {
    position: relative;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden;
  }
  .slogan {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    font-size: 36px;
    line-height: 42px;
    transform: translateX(-50%);
    $shadow: theme-color(secondary);
    text-shadow: -3px 0 $shadow, 0 3px $shadow, 3px 0 $shadow, 0 -3px $shadow;
  }
  .intro-movie {
    position: relative;
    width: 980px;
    height: 570px;
    background-color: theme-color(primary);
  }
  .soldier {
    position: absolute;
    height: 620px;
    width: auto;
    right: 70px;
    bottom: 0px;
    display: block;
    transform: translate3d(255px, 200px, 0);
  }
  .talk {
    position: absolute;
    left: -110px;
    top: -90px;
    z-index: 2;
    background-image: url('/intro2-talk.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 450px;
    padding-bottom: 2%;
    transform-origin: bottom right;
    transform: scale(0.1);

    .text {
      color: theme-color(dark);
      text-align: center;

      font-size: 36px;
      line-height: 200px;
      height: 200px;
    }
  }
}
</style>
