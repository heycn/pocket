<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/Tag/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <button class="createTag" @click="crateTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Tags extends Vue {
  tags = tagListModel.data;

  crateTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    } else {
      window.alert('标签名不能为空');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  .tag {
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
