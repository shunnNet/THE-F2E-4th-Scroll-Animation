<script setup>
import ScrollRail from '@/components/ScrollRail.vue'
import { mapPercentToScale } from '@/utils/math.js'
</script>
<template>
  <ScrollRail :length="15000">
    <template v-slot="{ progress }">
      <div
        class="section-mountain-view"
        :style="{ animationDelay: `-${mapPercentToScale(progress, 1.9)}s` }"
      >
        <div class="layer layer-1">
          <div
            class="slogan"
            :style="{
              top: `${100 - mapPercentToScale(progress, 50)}%`,
              animationDelay: `-${mapPercentToScale(progress, 1.9)}s`,
            }"
          >
            <h2
              class="slogan__title"
              :style="{
                animationDelay: `-${mapPercentToScale(progress, 1.9)}s`,
              }"
            >
              互動式網頁設計
            </h2>
            <p class="slogan__desc">
              <TypingText
                text="UI、前端接力合作，一同產出完整作品。"
                manual
                :manual-trigger="progress > 60"
                :per-text="150"
              />
            </p>
          </div>
        </div>
        <div
          class="layer layer-2"
          :style="{
            transform: `translateY(${mapPercentToScale(progress, 272)}px)`,
          }"
        />
        <div
          class="layer layer-3"
          :style="{
            transform: `translateY(${mapPercentToScale(progress, 671)}px)`,
          }"
        />
        <div class="layer layer-5" />
      </div>
    </template>
  </ScrollRail>
</template>
<style lang="scss">
.section-mountain-view {
  position: relative;
  height: 100%;
  background-color: theme-color(dark);
  animation-name: daylight;
  animation-play-state: paused;
  animation-duration: 2s;
  animation-delay: -1s;
  overflow: hidden;
  .layer {
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
  }
  .layer-1 {
    z-index: 1;
    display: flex;
    justify-content: center;
  }
  .layer-2 {
    // 3492 - 3220
    z-index: 2;
    background-image: url('@/assets/L2.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: auto 400px;
    @include breakpoint('tablet') {
      background-size: auto 550px;
    }
    @include breakpoint('laptop') {
      background-size: auto 672px;
    }
    @include breakpoint('desktop') {
      background-size: contain;
    }
  }
  .layer-3 {
    // 671
    z-index: 3;
    background-image: url('@/assets/L4.png'), url('@/assets/L3.png');
    background-position: bottom left, bottom right;
    background-repeat: no-repeat;
    background-size: auto 250px;

    @include breakpoint('mobile') {
      background-size: auto 350px;
    }
    @include breakpoint('laptop') {
      background-size: auto 608px, auto 651px;
    }
  }
  .layer-5 {
    // 3327
    z-index: 5;
    background-image: url('@/assets/L5.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: auto 250px;
    @include breakpoint('mobile') {
      background-size: auto 300px;
    }
    @include breakpoint('laptop') {
      background-size: auto 565px;
    }
    @include breakpoint('desktop') {
      background-size: contain;
    }
  }

  .slogan {
    position: absolute;
    top: 100%;
    transform: translateY(-100%);
    animation-name: sun;
    animation-play-state: paused;
    animation-duration: 2s;

    --color: theme-color(light);

    &__title {
      animation-name: sun;
      animation-play-state: paused;
      animation-duration: 2s;

      width: 350px;
      padding: 18px 0;
      margin: 0 auto;
      margin-bottom: 23px;
      border: 4px solid theme-color(light);
      text-align: center;

      font-size: 24px;
      line-height: 28px;

      @include breakpoint('mobile') {
        width: 400px;

        font-size: 36px;
        line-height: 42px;
      }

      @include breakpoint('laptop') {
        width: 788px;
        padding: 24px 0;
        margin-bottom: 12px;
        font-size: 72px;
        line-height: 84px;
      }
    }
    &__desc {
      text-align: center;
      font-size: 15px;
      line-height: 17.5px;
      height: 17.5px;
      @include breakpoint('laptop') {
        font-size: 24px;
        line-height: 28px;
        height: 28px;
      }
    }
  }
}
@keyframes sun {
  0% {
    color: theme-color(diamond);
    border-color: theme-color(diamond);
  }
  100% {
    color: theme-color(light);
    border-color: theme-color(light);
  }
}

@keyframes daylight {
  0% {
    background-color: theme-color(dark);
  }

  50% {
    background-color: #cc4f36;
  }

  100% {
    background-color: theme-color(primary-light);
  }
}
</style>
