<template>
  <div>
    <h2>Card 卡片</h2>
    <h3>通过卡片展示块状信息</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Card from "D:/UITest/markdown-web/Card.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        ` <div>      
    <THCard>
      <div slot="title">9.13</div>
      <div slot="body">今天天气不错</div>
    </THCard>
    <THCard type="blue">
      <div slot="title">9.14</div>
      <div slot="body">今天天气也不错</div>
    </THCard>
</div>`,
        ` <div>      
    <THCard>
      <div slot="title">9.13</div>
      <div slot="body">今天天气不错</div>
    </THCard>
    <THCard>
      <div slot="body">今天天气不错</div>
    </THCard>
</div>`,
        `<div>
    <THCard icon="icon2">
      <div slot="title">9.13</div>
      <div slot="body">今天天气不错</div>
    </THCard>  
    <THCard icon="icon3">
      <div slot="title">9.13</div>
      <div slot="body">今天天气不错</div>
    </THCard>
 </div>`,
        `<div>  
    <THCard :shadow="false">
      <div slot="title">9.13</div>
      <div slot="body">今天天气不错</div>
    </THCard>
</div>`,
      ],
      text: Card,
    };
  },
};
</script>

<style lang="less" scoped></style>
