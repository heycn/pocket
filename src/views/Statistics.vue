<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval" />
    <div>
      type: {{ type }}
      <br />
      interval: {{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';
  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    intervalList = intervalList;
    recordTypeList = recordTypeList;
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
  ::v-deep .interval-tabs-item {
    // TODO
    border-top: 1px solid white;
    height: 48px;
  }
</style>
