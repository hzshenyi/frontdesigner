
//通过url路由到指定的 模块(module) > 视图(view) ，可以指定 path:"/index" 如果没有指定，则系统缺省设置为 module+view
let routes = [{
  module:"flow",
  view:"index"
},
{
  module:"flow",
  view:"todoList"
}]

export default routes