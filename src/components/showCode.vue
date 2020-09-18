<template>
  <div class="component">
    <THCard class="code" v-html="code" icon="icon7"></THCard>
    <THCard class="effect" type="blue"><div slot="body">
        <code>{{ code }}</code>
      </div></THCard
    >
  </div>
</template>
<script>
import THCard from "D:/UITest/thunder-design/packages/Card";
// import THAlert from "D:/UITest/thunder-design/packages/Alert/index"

export default {
  name: "showCode",
  props: {
    code: {
      type: String,
      default: "暂时没有代码",
    },
  },
  components: {
    THCard,
    // THAlert
  },
};
</script>
<style lang="less" scoped>
.component {
  .code,
  .effect {
    margin: 0;
    margin-left: 20px;
    max-width: 900px;
  }
  .code {
    border-radius: 10px 10px 0 0;
    white-space: pre;
  }
  .effect {
    border-radius: 0 0 10px 10px;
  }
}
</style>
