<template>
  <div>
    <h2>Button 按钮</h2>
    <h3>老二次元的操作按钮</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Button from "D:/UITest/markdown-web/Button.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div>
    <THButton>蓝色按钮</THButton>
    <THButton type="green">绿色按钮</THButton>
</div>
    `,
        `<div>
    <THButton size="little">小号按钮</THButton>
    <THButton>基本按钮</THButton>
    <THButton size="large">大号按钮</THButton>
    <THButton size="increase">加大按钮</THButton>
</div>`,
        `<div>
    <THButton>基本按钮</THButton>
    <THButton :disabled="true">基本按钮</THButton>
</div>`,
        `<div>
    <THButton icon="icon1">基本按钮</THButton>
    <THButton icon="icon2">基本按钮</THButton>
    <THButton icon="icon3">基本按钮</THButton>
    <THButton icon="icon4">基本按钮</THButton>
</div>`,
      ],
      text: Button,
    };
  },
};
</script>

<style lang="less" scoped></style>
