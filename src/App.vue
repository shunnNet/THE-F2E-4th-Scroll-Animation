<script setup>
import { globalLoading } from '@/store/common.js'
import GlobalLoading from '@/components/business/GlobalLoading.vue'
</script>
<template>
  <GlobalLoading :show="globalLoading" />
</template>

<style lang="scss"></style>
