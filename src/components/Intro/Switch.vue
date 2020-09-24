<template>
  <div>
    <h2>Switch 开关</h2>
    <h3>以开关的形式进行选择</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Switch from "C:/Users/surface/Desktop/thunder-markdown-web/Switch.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div>
    <THSwitch disabledText="力学" checkedText="量子"></THSwitch>
</div>`,
     `<div>      
  <THSwitch disabledText="力学" checkedText="量子" :checked="true"></THSwitch>
  <THSwitch disabledText="力学" checkedText="量子" :disabled="true"></THSwitch>
</div>`,   
        `<div>     
    <THSwitch disabledText="力学" checkedText="量子" size="little"></THSwitch>
    <THSwitch disabledText="力学" checkedText="量子"></THSwitch>
    <THSwitch disabledText="力学" checkedText="量子" size="large"></THSwitch>
    <THSwitch disabledText="力学" checkedText="量子" size="increase"></THSwitch>
</div>`,
      ],
      text: Switch,
    };
  },
};
</script>

<style lang="less" scoped></style>
