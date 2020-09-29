<template>
  <div>
    <h2>Modal 对话框</h2>
    <h3>弹出对话框包含想要告诉用户的信息</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Modal from "../../../../markdown-web/Modal.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div>
    <THButton>testModal</THButton>
    <THModal :isActiveProp="true" title="测试标题" icon="icon8" >dbajshbdjsahbhdsb</THModal>
</div>`,
      ],
      text: Modal,
    };
  },
};
</script>

<style lang="less" scoped></style>
