<template>
  <div>
    <h2>Loading 加载中</h2>
    <h3>加载数据时的缓冲动画</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Loading from "../../../../markdown-web/Loading.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div>
    <THLoading></THLoading>
    <THLoading type="balls"></THLoading>
    <THLoading type="cylon"></THLoading>
</div>`,
      ],
      text: Loading,
    };
  },
};
</script>

<style lang="less" scoped></style>
