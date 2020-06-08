class Module {
    constructor() {
        this.resource = require("./Resource");
        this.init();
    }
    init() {
        this.index = global.index;//全局类
        this.config = this.index.config;
    }
    //得模块列表
    getList(app) {
      let resourcePath,space;
      let spaceDir = this.getSpaceName(app);
      resourcePath = this.config.moduleLib.path + "/" + spaceDir + "/_config.json";
        return this.resource.get(resourcePath);
    }
    //通过模块名和资源名获得内容
    get(app,module, resource) {
        const resourcePath = this.getResourcePath(app,module, resource);
        let html = this.resource.get(resourcePath);
        return html;
    }
    save(app,module, resource, body) {
        const resourcePath = this.getResourcePath(app,module, resource);
        let html = this.resource.save(resourcePath, body);
        return html;
    }
    // 得到平台配置
    getPlatformConfig(){
       return JSON.stringify(this.config);
    }
    //通过模块名和资源名获得路径
    getResourcePath(app,module, resource) {
        const baseDir = this.index.config.moduleLib.path;//根路径
        const spaceDir = this.getSpaceName(app);//公共空间 
        const moduleDir = module.indexOf(".mo")==-1?module + ".mo":module;
    
        const path = baseDir + "/" + spaceDir + "/" + moduleDir + "/"  + resource;
        return path;
    }
    getSpaceName(app){
        let space,spaceDir;
        if(app.indexOf(".pub")!="-1"){
            space = "_public"//公共空间
          }else{
              if(app.indexOf(".app")!="-1"){
                 space = "_app";//应用项目空间
              }else{
                space = "_private";//私人空间
              }
          }
          spaceDir = space + "/" + app;
          return spaceDir;
    }
}
module.exports = new Module(); 