<template>
  <div>
    <h2>Tooltip 文字提示</h2>
    <h3>文字提示气泡框</h3>
    <showCode :code="code" :text="text"></showCode>
  </div>
</template>
<script>
import showCode from "../showCode";
import Tooltip from "C:/Users/surface/Desktop/thunder-markdown-web/Tooltip.md";
export default {
  components: {
    showCode,
  },
  data() {
    return {
      code: [
        `<div class='box' style="width: 400px;margin-left:50%;transform: translate(-50%, 0);"> 
    <div class="top" style="text-align: center">         
        <THTooltip popperText="hdkjasnjdsan" placement="top-start" >上左</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="top" >上侧</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="top-end" >上右</THTooltip>
    </div>
  
    <div class="left" style="float: left;width: 60px;">      
        <THTooltip popperText="hdkjasnjdsan" placement="left-start" >左上</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="left" >左侧</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="left-end" >左下</THTooltip>
    </div> 

    <div class="right" style="float: right;width: 60px;">
        <THTooltip popperText="hdkjasnjdsan" placement="right-start" >右上</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="right" >右侧</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="right-end" >右下</THTooltip>
    </div> 

    <div class="bottom" style="clear: both;text-align: center;">         
        <THTooltip popperText="hdkjasnjdsan" placement="bottom-start" >下左</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="bottom" >下侧</THTooltip>
        <THTooltip popperText="hdkjasnjdsan" placement="bottom-end" >下右</THTooltip>
    </div>
</div>`,
      ],
      text: Tooltip,
    };
  },
};
</script>

<style lang="less" scoped></style>
