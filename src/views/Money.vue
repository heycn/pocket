<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :dataSource="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem fieldName="备注" placeholder="输入备注..." :value.sync="record.notes" />
    </div>
    <Tags @update:value="record.tags = $event" />
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';
  @Component({
    components: {Tabs, Tags, FormItem, NumberPad}
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }
    recordTypeList = recordTypeList;
    record: RecordItem = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };
    created() {
      this.$store.commit('fetchRecords');
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        return window.alert('您还没有选择标签');
      }
      this.$store.commit('createRecord', this.record);
      if (this.$store.state.createRecordError === null) {
        window.alert('保存成功');
        this.record.notes = '';
      }
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    background: #f6f6f6;
  }
</style>
