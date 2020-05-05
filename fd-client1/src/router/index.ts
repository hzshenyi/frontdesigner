import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../../srcFd/views/index.vue')
  },
  {
    path: '/indexApp/:app',
    name: 'indexApp',
    component: () => import(/* webpackChunkName: "about" */ '../../srcFd/views/indexAppList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
