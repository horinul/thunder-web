<template>
  <div class="component">
    <div class="header">
      <h1 class="title">THUNDER⚡</h1>
      <router-link class="toHomepage" to="homepage">主页</router-link>
    </div>
    <div class="body">
      <div class="aside">
        <h2>组件</h2>
        <router-link
          class="directoryItem"
          v-for="(item, index) in directoryList"
          :key="index"
          :to="item.split(' ')[0]"
        >
          {{ item }}
        </router-link>
      </div>
      <div class="main"><router-view></router-view></div>
    </div>
    <div class="footer">foot</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directoryList: [
        "Alert 警告",
        "BackTop 回到顶部",
        "Button 按钮",
        "Card 卡片",
        "Checkbox 多选",
        "Icon 图标",
        "Input 输入框",
        "Loading 加载中",
        "Message 消息提示",
        "Modal 对话框",
        "Radio 单选",
        "Select 选择器",
        "Switch 开关",
        "Tag 标签",
        "Tooltip 文字提示",
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.component {
  width: 1140px;
  margin: 0 auto;

  .header {
    display: flex;
    height: 60px;
    width: 100%;
    background-color: cadetblue;
    padding: 10px 0;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    justify-content: space-between;

    .title {
      margin-left: 10px;
    }

    .toHomepage {
      margin-right: 10px;
    }
  }

  .body {
    display: flex;

    .aside {
      flex: 2;
      // background-color: cornflowerblue;
      height: 800px;
      overflow: auto;
      margin-left: 10px;

      .directoryItem {
        display: block;
        height: 40px;
        width: 100%;
        color: #333;
        line-height: 40px;
        padding: 10px 0;
        cursor: pointer;
        text-decoration: none;
      }
    }

    .main {
      flex: 8;
      //   background-color: darkgrey;
      max-height: 800px;
      overflow: auto;
    }
  }

  .footer {
    height: 60px;
    // background-color: darkslateblue;
  }
}
</style>
