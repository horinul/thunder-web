<template>
  <div>
    <h2>BackTop 回到顶部</h2>
    <h3>点击可返回顶部的按钮</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Backtop from "D:/UITest/markdown-web/Backtop.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div><THBackTop></THBackTop></div>`,
        `<div><THBackTop icon="icon2" :right="60"></THBackTop></div>`,
        `<div><THBackTop :height="200" :bottom="100" :right="60"></THBackTop></div>`,
        `<div><THBackTop :right="1400"></THBackTop></div>`,
      ],
      text: Backtop,
    };
  },
};
</script>

<style lang="less" scoped></style>
