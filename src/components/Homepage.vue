<template>
  <div class="component">
    <h1>THUNDER DESIGN</h1>
    <router-link class="toDocs" to="docs">component</router-link>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {},
};
</script>

<style lang="less" scoped>
.component {
  width: 1140px;
  margin: 0 auto;
  .toDocs {
    cursor: pointer;
  }
}
</style>
