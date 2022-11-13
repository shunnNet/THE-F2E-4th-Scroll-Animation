<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import { track } from '@/composition/useProgressor.js'
import { mapPercentToScale } from '@/utils/math.js'
import EclipseFilter from '@/components/common/EclipseFilter.vue'
import { overTablet, overLaptop } from '@/store/breakpoints.js'

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
  <ScrollRail :length="3000">
    <template v-slot="{ progress }">
      <EclipseFilter
        :progress="track(progress, trackSetting).filter"
        direction="toRight"
        class="game-intro3"
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
                class="tree"
                width="707"
                height="664"
                src="@/assets/intro3-tree.png"
                :style="{
                  transform: `translate(-50%, ${
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
                  transform: `translate(-50%,${
                    100 - track(progress, trackSetting).soldier
                  }%)`,
                }"
              />
            </div>
          </div>
          <TypingText
            v-if="!overLaptop"
            class="slogan"
            text="動畫技能樹太雜無從下手..."
            :per-text="50"
            manual
            :manual-trigger="progress > 50"
          />
        </div>
        <TypingText
          v-if="overLaptop"
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
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    @include breakpoint('mobile') {
      margin-top: 98px;
    }
    @include breakpoint('laptop') {
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .intro-movie {
    position: relative;
    background-color: theme-color(primary);
    width: 100%;
    max-width: 768px;
    height: 300px;

    @include breakpoint('mobile') {
      height: 447px;
    }

    @include breakpoint('laptop') {
      max-width: 980px;
      height: 570px;
    }
  }
  .tree {
    position: absolute;
    display: block;
    width: auto;
    bottom: 0;
    left: 50%;
    height: 340px;
    @include breakpoint('mobile') {
      height: 521px;
    }

    @include breakpoint('laptop') {
      height: 707px;
    }
  }
  .soldier {
    position: absolute;
    display: block;
    width: 120px;
    height: auto;
    left: 43%;
    bottom: 0px;
    @include breakpoint('mobile') {
      width: 202px;
    }

    @include breakpoint('laptop') {
      width: 257px;
    }
  }
}
</style>
