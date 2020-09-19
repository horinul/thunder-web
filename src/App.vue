<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'app',
    components: {}
}
</script>

<style>
body,
h1 {
    margin: 0;
    padding: 0;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
html::-webkit-scrollbar {
  width: 6px;
}
/*定义滚动条轨道 内阴影+圆角*/
html::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #fff;
  border-radius: 10px;
  background-color: #eee;
  /* margin: 10px; */
}

/*定义滑块 内阴影+圆角*/
html::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d0cece;
}
</style>
