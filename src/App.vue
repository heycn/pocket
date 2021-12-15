<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="js">
import store from '@/store/index2.ts';

export default {
  data(){
    return {
      store: store
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/helper.scss';
@import '~@/assets/style/reset.scss';

body {
  background: #ededed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
}
</style>
