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
            path: "goods",
            name: "商品",
            component: () => import("../components/Goods/Goods"),
            children: [
                {
                    path: "shopAdmin",
                    name: "商品管理",
                    component: () => import("../components/Goods/ShopAdmin")
                }
            ]
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
