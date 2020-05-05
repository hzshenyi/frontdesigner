import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

// routesExtend.map((router)=>{
//   let module = router.module.indexOf(".mo")==-1?router.module+".mo":router.module;
//   let view = router.view.indexOf(".view")==-1?router.view+".vue":router.view;
//   router.path = router.path||"/"+module+"/"+view;//如果没有指定path，则path设置为 模块+视图
//   router.component = function(){
//    return import('../../srcFd/_public/'+module+'/_view/'+view);
//   }
//   routes.push(router)
// })

const router = new VueRouter({
  routes 
})

export default router
 