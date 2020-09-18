<template>
  <div>
    test
    <showCode :code="code"></showCode>
  </div>
</template>
<script>
import showCode from "../components/showCode";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: ` <THAlert type="blue" :showCancel="true">三年二班</THAlert>
 <THAlert icon="icon9">李子明同学</THAlert>
 <THAlert type="blue" size="little">三年二班</THAlert>
 <THAlert icon="icon9" size="large">李子明同学</THAlert>`,
    };
  },
};
</script>

<style lang="less" scoped></style>
