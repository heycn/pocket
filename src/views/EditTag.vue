<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title"> 编辑标签 </span>
      <span class="rightIcon" />
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" @update:value="update" fieldName="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button @click="remove"> 删除标签 </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditTag extends Vue {
  tag?: Tag = undefined;

  created() {
    // this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      return;
      // store.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      return;
      // if (store.removeTag(this.tag.id)) {
      //   this.$router.back();
      //   window.alert('刪除成功');
      // }
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.navBar {
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .leftIcon {
    width: 24px;
    height: 24px;
    margin-left: 12px;
    color: $color-highlight;
  }
  .rightIcon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  margin-top: 24px;
}
</style>
