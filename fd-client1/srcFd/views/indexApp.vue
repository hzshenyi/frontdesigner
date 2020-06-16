<!-- App.vue -->
<template>

<div class="fd-layout">
    <!-- 左 -->
    <div class="fd-left" style="width:320px;padding-right:10px"> 
 
 <el-tree
  class="filter-tree"
  :data="data"
  
  :props="defaultProps"
  :render-content="renderContent"
  @node-click="editResource"
  ref="tree">
</el-tree>
    </div>
     <!-- 右 -->
      <div class="fd-content">
       <vscode :resourcePath="item"   :resourceObjActived="resourceObjActived"  v-for="(item,i) in resourceList"  v-show="item === resourcePathActived" :key="i"></vscode>
    </div>
  </div>
  
</template>
<style>
.el-tree1{
  background-color:#c7cfe0;
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
<script>

import vscode from "./vscode.vue";
export default {
  components: { vscode },
  props: ["app"],
  data() {
    return {
      data:[],
       defaultProps: {
          children: 'children',
          label: 'title'
        },
      panel:[0],
      appList: [],moduleList:[],resourceList:[],resourceActived:"",resourcePathActived:"",resourceObjActived:{},resourceOpenList:[],
      open: ['public'],items:[],search:null,active:[],
      files: {
        module:'mdi-home',
        view:'mdi-domain',
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
      },
      tree: []
     
    };
  },
  created() {
    this.loadModuleList();
  },
  watch: {
      active(value) {
        debugger
      let item = value[0];//得到选中的资源
      this.editResource(item)
    }
  },
  methods: {
      loadModuleList: function() {
      let app = this.app;
      let host = this.$fd.getResourceServiceHost();
      let url =
        host +
        "/module/getList?_app=" +
        (app == null ? "" : app);
        
 this.axios.defaults.withCredentials = false; //不允许携带cookie
    this.axios.get(url).then(res => {
     //this.moduleList = res.data.modules;
      this.data = res.data.modulesTree;
    });
    },
 editResource:function(data,node,resourceType) {
       if(node.childNodes.length>0){ //如果不是资源
         return;
       }
      let $store = this.$store;
     // let resourcePath = "_app=admin&module=flow.mo&resource=_lib/_index.js";
      let resourcePath = "_app=admin&_resourcePath="+this.getResourcePath(node);
    //  this.resourceActived = resourcePath;
     //module = {title:module.name};
     let resource = {title:`${data.title}(${resourcePath.substring(resourcePath.indexOf("resourcePath")+13)})`};
     this.resourceObjActived = {module:module,resource:resource};//当前选中模块资源
     this.resourcePathActived = resourcePath;//当前选中的资源的路径
     data.resourcePath = resourcePath;
  
      //设置已打开资源为非激活状态
     // this.resourceOpenList.map(function(obj){
        //  obj.active = false;
     // })
     // resource.active = true;//设置当前资源为激活状态
      //resource.opened = true;//设置当前资源为打开状态
      if(this.resourceList.indexOf(resourcePath)==-1){
          this.resourceList.push(resourcePath);
           //记录所有打开资源
           this.resourceOpenList.push(resource);
      }
    },
    getResourcePath:function(node){
      let nodePath = [];
      for(var i=0;i<10;i++){
        if(node.parent){
          nodePath.push(node.data.name);
           node = node.parent;
        }
      }
      let resourcePath = nodePath.reverse().join("/");
      return resourcePath;
      
    },
    fetchUsers:function(){

    },
    saveResource:function(){
      
    },
     loadChildren:function(){
        debugger;
    },
    renderContent(h, { node, data, store }){
      return (
         <span class="custom-tree-node">
         <span>{data.title}</span>
         <span>{this.resourcePathActived==data.resourcePath?<i class="el-icon-check" style="color:red;font-weigth:900px"></i>:""}</span>      
         </span>
      );
    }
  }
};
</script>