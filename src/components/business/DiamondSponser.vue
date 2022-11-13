<script setup></script>
<template>
  <div class="diamond-sponser">
    <div class="diamond-sponser__wrap">
      <div class="diamond-sponser__group">
        <h2 class="diamond-sponser__title">
          <span class="color-diamond">鑽石級</span>贊助商
        </h2>
        <ul class="diamond-sponser__list">
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-block-studio.png"
              width="290"
              height="290"
            />
          </li>
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-titan.png"
              width="290"
              height="290"
            />
          </li>
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-kdan.png"
              width="290"
              height="290"
            />
          </li>
        </ul>
      </div>
      <div class="diamond-sponser__group">
        <h2 class="diamond-sponser__title">共同推廣</h2>
        <ul class="diamond-sponser__list">
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-jira.png"
              width="240"
              height="81"
            />
          </li>
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-miro.png"
              width="262"
              height="81"
            />
          </li>
          <li class="diamond-sponser__list-item">
            <img
              class="img--fluid"
              src="/logo-dotted-sign.png"
              width="287"
              height="116"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="diamonds-layer">
      <div class="diamonds-big-wrap"></div>
      <div class="diamonds-big-wrap"></div>
    </div>
    <div class="diamonds-layer-md">
      <div class="diamonds-md-wrap"></div>
      <div class="diamonds-md-wrap"></div>
    </div>
    <div class="diamonds-layer-sm">
      <div class="diamonds-sm-wrap"></div>
      <div class="diamonds-sm-wrap"></div>
    </div>
  </div>
</template>
<style lang="scss">
.diamond-sponser {
  position: relative;
  background-color: theme-color(primary);
  padding-top: 50px;
  padding-bottom: 100px;
  overflow-x: hidden;
  @include breakpoint('tablet') {
    padding-top: 100px;
    padding-bottom: 200px;
  }
  @include breakpoint('desktop') {
    padding-top: 115px;
    padding-bottom: 250px;
  }

  &__wrap {
    @extend .container;
    position: relative;
    z-index: 5;
  }

  &__group:not(:last-child) {
    margin-bottom: 50px;
    @include breakpoint('tablet') {
      margin-bottom: 150px;
    }
  }
  &__list {
    display: grid;
    justify-content: center;
    --cube-length: 202px;
    --grid-gap: 17px;
    gap: var(--grid-gap);
    grid-template-columns: var(--cube-length);
    grid-auto-rows: var(--cube-length);
    @include breakpoint('tablet') {
      grid-template-columns: var(--cube-length) var(--cube-length) var(
          --cube-length
        );
      --cube-length: 202px;
      --grid-gap: 17px;
    }
    @include breakpoint('desktop') {
      --cube-length: 375px;
      --grid-gap: 32px;
    }
  }
  &__list-item {
    background-color: theme-color(light);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 42px;

    @include breakpoint('tablet') {
      margin-bottom: 50px;
      font-size: 72px;
      line-height: 84px;
    }
  }
}

.diamonds-layer {
  display: flex;
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  animation-name: move;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.diamonds-big-wrap {
  width: 50%;
  height: 100%;
  background-image: url('/diamond_big.png'), url('/diamond_big.png'),
    url('/diamond_big.png');
  background-repeat: no-repeat;
  background-position: 72% 5%, 15% 50%, 55% 90%;
}

.diamonds-layer-md {
  display: flex;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  animation-name: move;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  filter: brightness(0.8);
}

.diamonds-md-wrap {
  width: 50%;
  height: 100%;
  background-image: url('/diamond_md.png'), url('/diamond_md.png'),
    url('/diamond_md.png'), url('/diamond_md.png'), url('/diamond_md.png'),
    url('/diamond_md.png');
  background-repeat: no-repeat;
  background-position: 62% 20%, 22% 80%, 80% 30%, 50% 50%, 60% 0%, 30% 90%;
}

.diamonds-layer-sm {
  display: flex;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  animation-name: move;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  filter: brightness(0.6);
}

.diamonds-sm-wrap {
  width: 50%;
  height: 100%;
  background-image: url('/diamond_sm.png'), url('/diamond_sm.png'),
    url('/diamond_sm.png'), url('/diamond_sm.png'), url('/diamond_sm.png'),
    url('/diamond_sm.png'), url('/diamond_sm.png'), url('/diamond_sm.png'),
    url('/diamond_sm.png');
  background-repeat: no-repeat;
  background-position: 22% 80%, 9% 7%, 90% 2%, 39% 61%, 61% 39%, 83% 22%,
    41% 20%, 80% 99%, 55% 53%;
}

@keyframes move {
  0% {
    transform: translateX(-0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
