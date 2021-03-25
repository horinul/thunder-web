<template>
  <div>
    <h2>Radio 单选框</h2>
    <h3>选择多个选项中的其中一个</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Radio from "../../static/markdown-web/Radio.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div>  
    <THRadio value="test" id="radio1" name="radioGroup1">aaa</THRadio>
    <THRadio type="blue" value="aaa" id="radio2" name="radioGroup1">aaa</THRadio>
 </div>`,
` <div>  
    <THRadio value="test" id="radio3" name="radioGroup2" :disabled="true">aaa</THRadio>
    <THRadio type="blue" value="aaa" id="radio4" name="radioGroup2" :checked="true">aaa</THRadio>
 </div>`
      ],
      text: Radio,
    };
  },
};
</script>

<style lang="less" scoped></style>
