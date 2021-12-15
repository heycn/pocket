<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem fieldName="备注" placeholder="输入备注..." @update:value="onUpdateNotes" />
    </div>
    <Tags />
    {{ count }}
    <button @click="add">+1</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';

@Component({
  components: {NumberPad, Types, FormItem, Tags},
  computed: {
    count() {
      return store.count;
    },
    recordList() {
      return store.recordList;
    }
  }
})
export default class Money extends Vue {
  add() {
    store.addCount();
  }
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  background: #f6f6f6;
}
</style>
