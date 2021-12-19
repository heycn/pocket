<template>
  <div id="app">
    <router-view />
  </div>
</template>

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

  @media (min-width: 500px) {
    #app {
      border-left: 1px solid #333;
      border-right: 1px solid #333;
      max-width: 500px;
      margin: 0 auto;
    }
  }
</style>
