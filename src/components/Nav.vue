<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#tag" />
      </svg>
      记账
    </router-link>
    |
    <router-link to="/tag">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/tag.svg'

console.log('打印:' + x)

export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
