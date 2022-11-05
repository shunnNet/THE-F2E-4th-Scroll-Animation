<script setup>
import { globalLoading } from '@/store/common.js'
import GlobalLoading from '@/components/business/GlobalLoading.vue'
import NavBar from '@/components/business/NavBar.vue'
</script>
<template>
  <NavBar />
  <GlobalLoading :show="globalLoading" />
</template>

<style lang="scss"></style>
