<template>
  <div>
    <h2>Input 输入框</h2>
    <h3>通过设备输入字符</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Input from "D:/UITest/markdown-web/Input.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div>
    <THInput type="text" placeholder="text"></THInput>
    <THInput type="textarea" placeholder="textarea"></THInput>
    <THInput type="tel" placeholder="tel"></THInput>
    <THInput  type="password" placeholder="password"></THInput>
    <THInput  type="email" placeholder="email"></THInput>
    <THInput  type="number" placeholder="number"></THInput>
</div>`,
        `<div>
    <THInput placeholder="text" icon="icon1" type="text"></THInput>
    <THInput placeholder="tel" icon="icon2" type="tel"></THInput>
</div>`,
        `<div>
    <THInput type="text" placeholder="text" size="little"></THInput>
    <THInput type="text" placeholder="text" size="default"></THInput>
    <THInput type="text" placeholder="text" size="large"></THInput>
    <THInput type="text" placeholder="text" size="increase"></THInput>
</div>`,
      ],
      text: Input,
    };
  },
};
</script>

<style lang="less" scoped></style>
