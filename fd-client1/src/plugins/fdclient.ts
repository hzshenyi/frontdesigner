import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// 定义接口服务类
class PortService{
    constructor(){
        this.init();
    }
    init(){
       
    }

   
}
let portService = new PortService();
// 定义前端开发类
class FdClient {
    constructor() {
        this.init();
    }
    init() {
        // console.log(Vue.$cookies);
    }
    getPortService(){
        return portService;
    }
    getResourceServiceHost(){
        let host = Vue.$cookies.get("fd-resourceHost");
        return host;
    }
    getDemoServiceHost(){
        let host = Vue.$cookies.get("fd-demoHost");
        return host;
    }
  
}
Vue.prototype.$fdClient = new FdClient();
Vue.prototype.$fd = Vue.prototype.$fdClient;
// window.$fd = Vue.prototype.$fd;