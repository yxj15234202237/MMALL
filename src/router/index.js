import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import("../views/Login")
  },
  {
    path: '/Index',
    name: '首页',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    children: [
        {
            path: 'home',
            name: '首页',
            component: () => import("../components/Home/Home")
        },
        {
            path: "/index",
            redirect: "/index/home"
        }
    ]
  },
  {
    path: "/",
    redirect: "/login"
  }
]

const router = new VueRouter({
  routes
})

export default router
