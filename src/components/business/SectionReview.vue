<script setup></script>
<template>
  <section class="section-review">
    <h2 class="title">評審機制</h2>
    <p class="description">
      初選：<br />
      將由六角學院前端、UI 評審進行第一波篩選，<br />
      並於 12/5（五）公布初選佳作名單<br />
      <br />
      決選：<br />
      由三大企業針對該企業主題進行入圍獎最後篩選，<br />
      並於 12/23（五）公布企業得獎名單
    </p>
  </section>
</template>
<style lang="scss">
.section-review {
  @extend .container-md;
  .title {
    font-size: 36px;
    line-height: 42px;
    color: theme-color(primary-light);
    margin-bottom: 40px;

    @include breakpoint('tablet') {
      font-size: 56px;
      line-height: 65px;
    }
  }

  .description {
    font-size: 16px;
    @include breakpoint('tablet') {
      font-size: 24px;
    }
  }
}
</style>
