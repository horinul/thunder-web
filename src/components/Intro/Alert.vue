<template>
  <div>
    <h2>Alert 警告</h2>
    <h3>展示页面中重要的信息</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Alert from "D:/UITest/markdown-web/Alert.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div><THAlert icon="icon1">李子明同学</THAlert>
 <THAlert icon="icon2">李子明同学</THAlert>
 <THAlert icon="icon3">李子明同学</THAlert>
 <THAlert icon="icon4">李子明同学</THAlert></div>`,
        `<div><THAlert type="green">三年二班</THAlert>
<THAlert type="blue">三年二班</THAlert>
 </div>`,
        `<div><THAlert size="little">三年二班</THAlert>
 <THAlert size="default">三年二班</THAlert>
 <THAlert size="large">三年二班</THAlert>
</div>`,
        `<div><THAlert :showCancel="true">三年二班</THAlert>
 <THAlert :showCancel="false">三年二班</THAlert>
</div>`,
      ],
      text: Alert,
    };
  },
};
</script>

<style lang="less" scoped></style>
