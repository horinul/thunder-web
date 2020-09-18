import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Homepage from "../components/Homepage.vue";
import Docs from "../components/Docs.vue";
import Alert from "../components/Alert.vue"
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
    component: Docs,
    children:[
      {
        path: "/alert",
        name: "alert",
        component: Alert,
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router