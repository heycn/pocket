<template>
  <button class="button" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Name extends Vue {}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';

.button {
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
