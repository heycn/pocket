<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right" />
      </li>
      <li>
        <span>食</span>
        <Icon name="right" />
      </li>
      <li>
        <span>住</span>
        <Icon name="right" />
      </li>
      <li>
        <span>行</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Tag'
};
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  li {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    svg {
      width: 32px;
      height: 32px;
      color: #999;
    }
  }
}
.createTag {
  background: inherit;
  color: $color-highlight;
  border: 1px solid $color-highlight;
  border-radius: 6px;
  height: 2.5em;
  padding: 0 104px;
  &-wrapper {
    text-align: center;
    margin-top: 24px;
  }
}
</style>
