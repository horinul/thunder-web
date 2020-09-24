<template>
  <div class="allComponent">
    <div v-for="(item, index) in allList" :key="index" class="itemComponent">
      <div class="text" v-html="item.text"></div>
      <div class="component" @click="test($event)">
        <effect
          :html="item.code"
          class="effect"
          v-if="item.showEffect"
        ></effect>
        <div class="br"></div>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
        >
          <div v-show="item.iscodeShow">
            <pre v-highlightjs class="code dv-json-editor">
            <code>{{ item.codeText }}</code>
      </pre>
            <div class="br"></div>
          </div>
        </transition>
        <div class="iscodeShow" @click="changeShow(index)">
          {{ item.codeShowText }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue/dist/vue.esm.js";
import thunder from 'thunder-design'
Vue.use(thunder)

import hljs from "highlight.js";
// 样式文件
import("highlight.js/styles/atom-one-light.css");

export default {
  name: "showCode",
  directives: {
    highlightjs: {
      inserted() {
        // 遍历元素并且使用 highlight 进行处理
        const preEl = document.querySelectorAll("pre code");
        preEl.forEach((el) => {
          hljs.highlightBlock(el);
        });
      },
    },
  },
  props: {
    code: {
      type: Array,
    },
    text: {
      type: String,
    },
    showEffect: {
      type: Array,
    },
    otherCode: {
      type: Array,
    },
  },
  created() {
    let textItem = this.text.split("\n");
    for (let i = 0; i < textItem.length - 1; i++) {
      if (this.code[i]) {
        let x = {
          code: this.code[i],
          codeText: this.otherCode
            ? this.otherCode[i]
              ? this.otherCode[i]
              : this.code[i]
            : this.code[i],
          text: textItem[i],
          iscodeShow: false,
          codeShowText: "显示代码",
          showEffect: this.showEffect ? this.showEffect[i] : true,
        };
        this.allList.push(x);
      }
    }
  },
  data() {
    return {
      allList: [],
      testModal: false,
      // 组件数据
    };
  },
  components: {
    effect: {
      props: {
        html: String,
      },
      render(h) {
        const com = Vue.extend({
          template: this.html,
        });
        return h(com, {});
      },
    },
  },
  methods: {
    changeShow(index) {
      this.allList[index].iscodeShow = !this.allList[index].iscodeShow;
      this.allList[index].iscodeShow
        ? (this.allList[index].codeShowText = "隐藏代码")
        : (this.allList[index].codeShowText = "展示代码");
    },
    aaa() {
      alert("aaa");
    },
    test(event) {
      if (event.target.innerText === "successMessage") {
        this.$message.success("success");
      } else if (event.target.innerText === "errorMessage") {
        this.$message.error("error");
      } else if (event.target.innerText === "warnMessage") {
        this.$message.warn("warn");
      } else if (event.target.innerText === "Message") {
        this.$message.message("message");
      } else if (event.target.innerText === "durationSuccessMessage") {
        this.$message.success("message", 5000);
      } else if (event.target.innerText === "distanceFromTopSuccessMessage") {
        this.$message.success("message", 2000, 300);
      } else if (event.target.innerText === "testModal") {
        // this.testModal = true;
      }
    },

    // 组件方法
    // testMsg() {
    //   this.$message.message("test");
    // },
    // testWarn() {
    //   this.$message.warn("test");
    // },
    // testError() {
    //   this.$message.error("test");
    // },
    // testSuccess() {
    //   this.$message.success("testndsoandsakddsnajdnajk");
    // },
  },
};
</script>
<style lang="less" scoped>
@import url("../css/mono-blue.css");
.allComponent {
  // margin: 15px;
  .allComponent:hover {
    box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.4);
    /*考虑浏览器兼容性*/
    -moz-box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.4);
    -webkit-box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.4);
  }
  .itemComponent {
    margin-top: 30px;

    .component {
      border: 1px solid #ebebeb;
      border-radius: 10px;

      .br {
        width: 100%;
        height: 1px;
        background-color: #ebebeb;
      }
      .showCodeComponent {
        transition: all 0.3s ease;
      }
      .code,
      .effect {
        max-width: 900px;
      }
      .code {
        // border-radius: 10px 10px 0 0;
        white-space: pre;
        background-color: #eaeef3;
      }
      .effect {
        border-radius: 0 0 10px 10px;
      }
      .iscodeShow {
        cursor: pointer;
        text-align: center;
        padding: 10px 0;
        height: 20px;
        line-height: 20px;
      }
      .iscodeShow:hover {
        color: cadetblue;
      }
    }
  }
}
</style>
