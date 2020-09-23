<template>
  <div class="component">
    <div class="header">
      <h1 class="title">THUNDER⚡</h1>
      <router-link class="toHomepage" to="homepage"
        ><span class="toHomeImg"></span>主页</router-link
      >
    </div>
    <div class="body">
      <div class="aside" id="box">
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
      <div class="main" id="box"><router-view></router-view></div>
    </div>
    <div class="footer">
      <div class="footerVersion">2020 1.0</div>
      <div class="footerTools">
        <span class="footerLink"></span><span>GitHub</span>
        <span class="footerLink"></span><span>反馈建议</span>
      </div>
    </div>
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
        // "Select 选择器",
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
      color: #fff;
      text-decoration: none;
      .toHomeImg {
        background-image: url("../static/toHome.png");
        background-size: cover;
        display: inline-block;
        height: 23px;
        width: 23px;
        margin-right: 4px;
        vertical-align: middle;
      }
    }
  }

  .body {
    display: flex;
    .aside {
      flex: 2;
      max-height: 800px;
      // margin-left: 10px;
      overflow: hidden;
      .directoryItem {
        display: block;
        height: 40px;
        width: 90%;
        color: #333;
        line-height: 40px;
        padding: 10px 10px;
        cursor: pointer;
        text-decoration: none;
      }
      .directoryItem:hover{
        background-color: rgba(165, 223, 250, 0.3);
      }
    }
    .aside:hover {
      overflow: auto;
    }
    .main {
      flex: 8;
      //   background-color: darkgrey;
      max-height: 800px;
      // margin: 20px;
      padding: 0 20px;
      // overflow: auto;
      overflow: hidden;
    }
    .main:hover {
      overflow: auto;
    }
  }

  .footer {
    height: 40px;
    background-color: cadetblue;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    .footerTools {
      cursor: pointer;
      .footerLink {
        background-image: url("../static/link.png");
        background-size: cover;
        display: inline-block;
        height: 12px;
        width: 12px;
        margin: 0 5px 0 10px;
        vertical-align: middle;
      }
    }
  }
}
// 滚动条样式
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
#box::-webkit-scrollbar {
  width: 6px;
}
/*定义滚动条轨道 内阴影+圆角*/
#box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #fff;
  border-radius: 10px;
  background-color: #eee;
  margin: 10px;
}

/*定义滑块 内阴影+圆角*/
#box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d0cece;
}
</style>
