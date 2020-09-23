<template>
  <div class="component">
    <h1 class="title">THUNDER DESIGN</h1>
    <router-link class="toDocs" to="docs">组件</router-link>
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
  justify-content: space-between;
  height: 730px;
  padding: 0 10px;
  background-image: url("../static/space.png");
  background-repeat: no-repeat;
  background-size: 600px 400px;
  background-position: center;
  .title {
    font-size: 40px;
    left: 50%;
    top: 5%;
    position: absolute;
    display: inline-block;
    transform: translateX(-50%);
  }
  .toDocs {
    position: absolute;
    right: 1%;
    top: 1%;
    cursor: pointer;
    width: 50px;
    height: 30px;
    color: #fff;
    text-decoration: none;
    padding-left: 8px;
    padding-top: 4px;
    background-repeat: no-repeat;
    background-image: url("../static/linkSpaceBac.png");
    background-size: cover;
    background-size: 50px 30px;
  }
  .toDocs:active {
    color: #ffd700;
  }
}
</style>
