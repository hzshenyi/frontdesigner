import Vue from 'vue'
//import VueCookies from 'vue-cookies'

//Vue.use(VueCookies)
// 定义接口服务类
class PortService{
    constructor(){
        this.init();
    }
    init(){
        this.serviceUrl = {
           
        }
    }
    getService(name){
      return this.serviceUrl[name].host;
    }
}
let portService = new PortService();
// 定义前端开发类
class FdClient {
    constructor() {
        this.init();
    }
    init() {
        this.getPlatformConfig(); 
        this.getAppConfig();
 
    }
    load(router){
    //    this.vue = vue;
       this.router = router;
       this.configRoutes(router);
       this.onload();
    }
    getPortService(){
        return portService;
    }
    getPlatformConfig() {
        //得到平台配置
     
    }
    getAppName(){
      let appName = location.href;
      appName = appName.substring(0,appName.indexOf("/#"));
      appName = appName.substring(appName.lastIndexOf("/")+1);
      return appName;
    }
    getAppConfig(){//得到应用配置
        let appConfig = {};
      //  let app = VueCookies.get('fd-app');
        let app = this.getAppName();
        let space,spaceDir;
  
        if(app.indexOf(".pub")!=-1){
            space = '_public'//公共空间
          }else{
              if(app.indexOf(".app")!="-1"){
                 space = '_app';//应用项目空间
              }else{
                space = '_private';//私人空间
              }
          }
          spaceDir = space + '/' + app;
         
        // let app = vue.$route.query._app||""; 
        appConfig.app = app;
        appConfig.spaceDir = spaceDir;
        return appConfig;
    }
    configRoutes(routers){//配置路由
            let spaceDir = this.getAppConfig().spaceDir;

          import ('../../srcFd/'+spaceDir+'/_config.mo/_config/_router.js').then((routesExtend)=>{
            
            routesExtend.default.map((router)=>{
              
              let module = router.module.indexOf(".mo")==-1?router.module+".mo":router.module;
            //  module = baseDir+spaceDir+'/';
              let view = router.view.indexOf(".view")==-1?router.view+".vue":router.view;
              router.path = router.path||"/"+module+"/"+view;//如果没有指定path，则path设置为 模块+视图
             
              router.component = function(){
               return import('../../srcFd/'+spaceDir+'/'+module + '/_view/'+view);
              } 
            }) 
            routers.addRoutes(routesExtend.default); 
          })
       
      
        // console.log(routesExtend+routers)
    }
    //加载事件
    onload(){
      let spaceDir = this.getAppConfig().spaceDir;
      //先加载公共模块事件
     // import("../../srcFd/_public/_config.mo/_lib/_index.js");
      //再加载当前
      if(spaceDir!="_public"){
        import("../../srcFd/"+spaceDir+"/_config.mo/_lib/_index.js");
      }
     
    }
    getUrlParam(param){
       return this.router.currentRoute.query[param]||"";
    }
    post(url,data,fun){
      fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        body:data,
        credentials: 'include'
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
      fun(data);
    });
    }

}
Vue.prototype.$fd = new FdClient();
window.$fd = Vue.prototype.$fd;
 
 