<!-- App.vue -->
<template>
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
    activatable
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
      open: ['public'],items:[],search:null,
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
  watch: {},
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
      let resourcePath = this.app+"/"+module.name+".mo"+"/"+resourceType+"/"+resource.name;
      resourcePath = `_app=${this.app}&module=${module.name}&resource=${resourceType}/${resource.name}`;
      this.resourceActived = resourcePath;
      this.resourceObjActived = {module:module,resource:resource};//当前选中模块资源
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
    saveResource:function(){
      alert(3)
    }
  }
};
</script>