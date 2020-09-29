<template>
  <div>
    <h2>Checkbox 多选框</h2>
    <h3>一组备选项中进行多选</h3>
    <showCode :code="code" :text="text" :showEffect="showEffect"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Checkbox from "../../../../markdown-web/Checkbox.md";
// import THCheckboxGroup from "D:/UITest/thunder-design/packages/Checkbox/src/checkboxGroup";
// import THCheckbox from "D:/UITest/thunder-design/packages/Checkbox/index";
export default {
  components: {
    showCode,
    // THCheckboxGroup,
    // THCheckbox,
  },
  data() {
    return {
        // 这里的v-model和click弹出数据上有问题，待打包解决后一起复现解决
      code: [
        `<div>
    <THCheckboxGroup>
      <THCheckbox value="aaa">aaa</THCheckbox>
      <THCheckbox value="bbb">bbb</THCheckbox>
      <THCheckbox value="ccc">ccc</THCheckbox>
    </THCheckboxGroup>
</div>`,
        `<THCheckboxGroup v-model="checkbox" @click="checkboxMethod"></THCheckboxGroup>`,
      ],
      text: Checkbox,
      showEffect: [true, false],
    };
  },
};
</script>

<style lang="less" scoped></style>
