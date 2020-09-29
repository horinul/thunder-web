<template>
  <div>
    <h2>Icon 图标</h2>
    <h3>一套老二次元的图标</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Icon from "../../../../markdown-web/Icon.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div style="display:flex">
    <THIcon size="little"></THIcon>
    <THIcon size="default"></THIcon>
    <THIcon size="large"></THIcon>
    <THIcon size="increase"></THIcon>
</div>`,
        `<div style="display:flex">
      <THIcon icon="icon1"></THIcon><THIcon icon="icon2"></THIcon>
      <THIcon icon="icon3"></THIcon><THIcon icon="icon4"></THIcon>
      <THIcon icon="icon5"></THIcon><THIcon icon="icon6"></THIcon>
      <THIcon icon="icon7"></THIcon><THIcon icon="icon8"></THIcon>   
      <THIcon icon="icon9"></THIcon><THIcon icon="icon10"></THIcon>
</div>`,
      ],
      text: Icon,
    };
  },
};
</script>

<style lang="less" scoped></style>
