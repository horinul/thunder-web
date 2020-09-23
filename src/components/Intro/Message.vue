<template>
  <div>
    <h2>Message 消息</h2>
    <h3>在页面顶部进行各种类型的消息提示</h3>
    <showCode :code="code" :text="text" :otherCode="otherCode"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Message from "D:/UITest/markdown-web/Message.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div>
    <THButton icon="icon6">Message</THButton>
    <THButton icon="icon6">errorMessage</THButton>
    <THButton icon="icon6">warnMessage</THButton>
    <THButton icon="icon6">successMessage</THButton>
</div>`,
        ` <div><THButton icon="icon6">durationSuccessMessage</THButton></div>`,
        ` <div><THButton icon="icon6">distanceFromTopSuccessMessage</THButton></div>`
      ],
      text: Message,
      otherCode: [
        `this.$message.success("success");
this.$message.error("error");
this.$message.warn("warn");
this.$message.message("message");`,
        `this.$message.success("success",5000);`,
   `this.$message.success("success",2000,300);`,
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
