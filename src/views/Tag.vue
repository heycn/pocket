<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/Tag/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag"> 新建标签 </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
// TODO
// import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component({
  components: {Button}
})
export default class Tag extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit('fetchTags');
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
