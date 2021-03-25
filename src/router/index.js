import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Homepage from "../components/Homepage.vue";
import Docs from "../components/Docs.vue";
import Alert from "../components/Intro/Alert.vue"
import Backtop from "../components/Intro/Backtop.vue"
import Button from "../components/Intro/Button.vue"
import Card from "../components/Intro/Card.vue"
import Checkbox from "../components/Intro/Checkbox.vue"
import Icon from "../components/Intro/Icon.vue"
import Input from "../components/Intro/Input.vue"
import Loading from "../components/Intro/Loading.vue"
import Message from "../components/Intro/Message.vue"
import Modal from "../components/Intro/Modal.vue"
import Radio from "../components/Intro/Radio.vue"
import Switch from "../components/Intro/Switch.vue"
import Tag from "../components/Intro/Tag.vue"
import Tooltip from "../components/Intro/Tooltip.vue"

const routes = [{
    path: "/",
    redirect: "/homepage",
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: Homepage,
  },
  {
    path: "/docs",
    name: "docs",
    redirect:'/alert',
    component: Docs,
    children: [{
        path: "/alert",
        name: "alert",
        component: Alert,
      },
      {
        path: "/backtop",
        name: "backtop",
        component: Backtop,
      },
      {
        path: "/button",
        name: "button",
        component: Button,
      },
      {
        path: "/card",
        name: "card",
        component: Card,
      },
      {
        path: "/checkbox",
        name: "checkbox",
        component: Checkbox,
      },
      {
        path: "/icon",
        name: "icon",
        component: Icon,
      },
      {
        path: "/input",
        name: "input",
        component: Input,
      },
      {
        path: "/loading",
        name: "loading",
        component: Loading,
      },
      {
        path: "/message",
        name: "message",
        component: Message,
      },
      {
        path: "/modal",
        name: "modal",
        component: Modal,
      },
      {
        path: "/radio",
        name: "radio",
        component: Radio,
      },
      {
        path: "/switch",
        name: "switch",
        component: Switch,
      },
      {
        path: "/tag",
        name: "tag",
        component: Tag,
      },
      {
        path: "/tooltip",
        name: "tooltip",
        component: Tooltip,
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router