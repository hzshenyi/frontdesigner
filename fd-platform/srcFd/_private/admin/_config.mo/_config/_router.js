
//通过url路由到指定的 模块(module) > 视图(view) ，可以指定 path:"/index" 如果没有指定，则系统缺省设置为 module+view
let routes = [{
  path:"/index",
  module:"flow",
  view:"index",
  children:[{
    path:"app",
    component: () => import('../../flow.mo/_view/app.vue'),
    module:"flow",
    view:"todoList"
  },{
    path:"todolist/:param",
    name:"todolist",
    component: () => import('../../flow.mo/_view/todoList.vue'),
    module:"flow",
    view:"todoList"
  },
  {
    path:"details/:param",
    name:"details",
    component: () => import('../../flow.mo/_view/details.vue'),
    module:"flow",
    view:"details"
  },
  {
    path:"decision/:param",
    name:"decision",
    component: () => import('../../flow.mo/_view/decision.vue'),
    module:"flow",
    view:"details"
  }]
},
{
  path:"/todo",
  module:"flow",
  view:"todoList"
},{
  module:"flow",
  view:"test"
}]
 
export default routes