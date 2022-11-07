<script setup></script>
<template>
  <section class="section-reward">
    <h2 class="title">獎項</h2>
    <ul class="list">
      <li class="list-item">
        <p class="list-item__title">
          初選佳作 共六十位 <span class="color-primary">數位獎狀</span>
        </p>
        <p class="list-item__desc">每週主題個人組十位、團體組十組</p>
      </li>
      <li class="list-item">
        <p class="list-item__title">
          個人企業獎 共六位 <span class="color-primary">NTD 3,000/位</span>
        </p>
        <p class="list-item__desc">每週主題各 2 名，設計 1 位、前端 1 位</p>
      </li>
      <li class="list-item">
        <p class="list-item__title">
          團體企業獎 共三組 <span class="color-primary">NTD 10,000/組</span>
        </p>
        <p class="list-item__desc">每週主題各 1 組</p>
      </li>
      <li class="list-item">
        <p class="list-item__title">以上皆提供完賽數位獎狀</p>
      </li>
    </ul>
  </section>
</template>
<style lang="scss">
.section-reward {
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

  .list {
    @extend .cubic-list;
    &-item {
      &:not(:last-child) {
        margin-bottom: 26px;
      }
    }
    &-item__title {
      font-size: 24px;
      @include breakpoint('tablet') {
        font-size: 36px;
      }
    }
    &-item__desc {
      font-size: 16px;
      @include breakpoint('tablet') {
        font-size: 24px;
      }
    }
  }
}
</style>
