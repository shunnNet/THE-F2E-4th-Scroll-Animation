<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from '@/components/HelloWorld.vue'

import DoorGroup from '@/components/DoorGroup.vue'

import { useWindowScroll } from '@vueuse/core'

export default {
  setup() {
    const { x, y } = useWindowScroll()
    return {
      x,
      y,
    }
  },

  components: {
    DoorGroup,
  },
}
</script>
<template>
  <div id="app">
    <div class="test">123455</div>
    <DoorGroup> </DoorGroup>
    <div class="placeholder"></div>
    <div class="monitor">
      <div>x:{{ x }}</div>
      <div>y:{{ y }}</div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
}
.placeholder {
  background-color: red;
  padding-top: 20%;
}
.monitor {
  position: fixed;
  padding: 20px;
  width: 300px;
  background-color: white;
  bottom: 0;
  right: 0;
}
</style>
