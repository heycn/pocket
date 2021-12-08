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
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>
