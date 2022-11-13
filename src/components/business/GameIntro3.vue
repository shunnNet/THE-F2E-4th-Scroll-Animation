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
  tree: {
    start: 50,
    end: 80,
  },
  soldier: {
    start: 60,
    end: 80,
  },
}
</script>
<template>
  <ScrollRail :length="5000">
    <template v-slot="{ progress }">
      <EclipseFilter
        :progress="track(progress, trackSetting).filter"
        direction="toRight"
        class="game-intro3"
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
              class="tree"
              width="707"
              height="664"
              src="@/assets/intro3-tree.png"
              :style="{
                transform: `translateY(${
                  100 - track(progress, trackSetting).tree
                }%)`,
              }"
            />
            <img
              class="soldier"
              width="257"
              height="236"
              src="@/assets/intro3-soldier.png"
              :style="{
                transform: `translateY(${
                  100 - track(progress, trackSetting).soldier
                }%)`,
              }"
            />
          </div>
        </div>
        <TypingText
          class="slogan"
          text="動畫技能樹太雜無從下手..."
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
.game-intro3 {
  height: 100%;
  display: flex;
  align-items: center;

  .wrapper {
    position: relative;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: flex-end;
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
  .tree {
    position: absolute;
    display: block;
    width: 707px;
    height: auto;
    bottom: 0;
    right: 100px;
  }
  .soldier {
    position: absolute;
    display: block;
    width: 257px;
    height: auto;
    left: 317px;
    bottom: 0px;
  }
}
</style>
