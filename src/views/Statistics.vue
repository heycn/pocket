<template>
  <Layout>
    <Tabs :classPrefix="type" :dataSource="typeList" :value.sync="type" />
    <Tabs :classPrefix="interval" :dataSource="intervalList" :value.sync="interval" />
    <div>
      type: {{ type }}
      <br />
      interval: {{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Types from '@/components/Money/Types.vue';
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';

  @Component({
    components: {Types, Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = [
      {text: '按天', value: 'day'},
      {text: '按周', value: 'week'},
      {text: '按年', value: 'month'}
    ];
    typeList = [
      {text: '支出', value: '-'},
      {text: '收入', value: '+'}
    ];
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/helper.scss';

  ::v-deep .type-tabs-item {
    background: $color-unselected;
    &.selected {
      background: $color-highlight;
      color: #ededed;
      &::after {
        display: none;
      }
    }
  }
</style>
