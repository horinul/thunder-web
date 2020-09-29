<template>
  <div>
    <h2>Tag 标签</h2>
    <h3>通过小巧的块状展示精准的信息</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Tag from "../../../../markdown-web/Tag.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div>      
    <THTag>tagtag</THTag>
    <THTag :borderShow="true">tagtag</THTag>
</div>`,
      `<div>  
    <THTag>tagtag</THTag>
    <THTag color="yellow">tagtag</THTag>
    <THTag color="red">tagtag</THTag>
    <THTag color="blue">tagtag</THTag>
    <THTag :borderShow="true">tagtag</THTag>
    <THTag color="yellow" :borderShow="true">tagtag</THTag>
    <THTag color="red" :borderShow="true">tagtag</THTag>
    <THTag color="blue" :borderShow="true">tagtag</THTag>
</div>`,    
        `<div>
    <THTag :showClose="false">tagtag</THTag>
    <THTag>tagtag</THTag>
</div>`,
      ],
      text: Tag,
    };
  },
};
</script>

<style lang="less" scoped></style>
