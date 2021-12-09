<template>
  <nav>
    <router-link to="/tag" class="item" active-class="selected">
      <Icon name="tag" />
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

nav {
  @extend %outShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: $color-unselected;
  .item {
    padding: 2px 0;
    width: 33.3333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  .item.selected {
    color: $color-highlight;
  }
}
</style>
