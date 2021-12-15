<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" :class="{selected: selectedTags.indexOf(tag) >= 0}" @click="toggle(tag)">
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  created() {
    this.$store.commit('fetchTags');
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #ededed;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  .current {
    display: flex;
    flex-wrap: wrap;
    li {
      $bg: #f6f6f6;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin: 4px;
      &.selected {
        background: darken($bg, 75%);
        color: white;
      }
    }
  }
  .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid #666;
      padding: 0 4px;
    }
  }
}
</style>
