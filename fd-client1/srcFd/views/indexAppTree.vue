<!-- App.vue -->
<template>

 <div class="fd-layout">
    <!-- 左 -->
    <div class="fd-left" style="width:320px;"> 
  <v-card
    class1="mx-auto"
    max-width="500"
  >
    <v-sheet class="pa-4  lighten-2">
      <v-text-field
        v-model="search"
        label="Search Company Directory"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
     
    </v-sheet>
    <v-card-text>
      <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    :active.sync="active"
    activatable
    return-object
    item-key="name"
    open-on-click
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
    </v-card-text>
  </v-card>
    </div>
     <!-- 右 -->
      <div class="fd-content">
       <vscode :resourcePath="item"   :resourceObjActived="resourceObjActived" v-for="(item,i) in resourceList"   :key="i"   v-show="item==resourceActived"></vscode>
    </div>
  </div>


  
</template>
   
<script>

import vscode from "./vscode.vue";
export default {
  components: { vscode },
  props: ["app"],
  data() {
    return {
      panel:[0],
      appList: [],moduleList:[],resourceList:[],resourceActived:"",resourceObjActived:{},resourceOpenList:[],
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
      tree: [],
    };
  },
  created() {
    this.loadModuleList();
  },
  watch: {
      active(value) {
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
     this.items = res.data.modulesTree;

    });

    },
      editResource:function(module,resource,resourceType) {     
      let $store = this.$store;
     // let resourcePath = this.app+"/"+module.name+".mo"+"/"+resourceType+"/"+resource.name;
      
      //resourcePath = `_app=${this.app}&module=${module.name}&resource=${resourceType}/${resource.name}`;
      let resourcePath = "_app=admin&module=flow.mo&resource=_lib/_index.js";
      this.resourceActived = resourcePath;
      //this.resourceObjActived = {module:module,resource:resource};//当前选中模块资源
      //设置已打开资源为非激活状态
      this.resourceOpenList.map(function(obj){
          obj.active = false;
      })
      resource.active = true;//设置当前资源为激活状态
      resource.opened = true;//设置当前资源为打开状态
      if(this.resourceList.indexOf(resourcePath)==-1){
          this.resourceList.push(resourcePath);
           //记录所有打开资源
           this.resourceOpenList.push(resource);
      }
     
    
    },
    fetchUsers:function(){
alert(1)
    },
    saveResource:function(){
      alert(3)
    }
  }
};
</script>