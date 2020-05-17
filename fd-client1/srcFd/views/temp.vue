<!-- App.vue -->
<template>
  <div class="fd-layout">
    <!-- 左 -->
    <div class="fd-left" style="width:320px;"> 
      <!-- 应用中的模块列表菜单 -->
      <template>
        <v-card max-width="320" class="mx-auto">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="200px" dark>
            <v-row class="fill-height">
              <v-card-title>
                <v-btn dark icon>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn dark icon class="mr-4">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn dark icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-card-title class="white--text pl-12 pt-12">
                <div class="display-1 pl-12 pt-12">{{app}}</div>
              </v-card-title>
            </v-row>
          </v-img>
          <v-expansion-panels
            :accordion="true"
            :popout="false"
            :inset="false"
            :multiple="true"
            :focusable="true"
            :disabled="false"
            :readonly="false"
            :flat="false"
            :hover="false"
            :tile="false"
           
            style="height:600px;overflow-y:auto"
            class="ide-scroll" v-model="panel"
          >
            <v-expansion-panel v-for="(item,i) in moduleList" :key="i">
              <!-- 列出所有模块 -->
              <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <template>
                  <!-- 列出模块下的资源 -->
                  <v-card class="mx-auto" width="300">
                    <v-list>
                      <!-- 类库 -->
                      <v-list-group value="true"  v-if="item.resource.lib">
                        <template v-slot:activator>
                          <v-list-item-title>类库</v-list-item-title>
                        </template>

                        <v-list-item
                          v-for="(item1,i) in item.resource.lib"
                          :key="i"
                          link
                          @click="editResource(item,item1,'_lib')"  :class="{'ide-active':item1.active}"
                        >
                         <v-icon  color="blue">mdi-home</v-icon><v-list-item-title v-text="item1.title"></v-list-item-title> <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                        </v-list-item>
                      </v-list-group>
                      <!-- 视图 -->
                      <v-list-group value="true" v-if="item.resource.view">
                        <template v-slot:activator>
                          <v-list-item-title>视图</v-list-item-title>
                        </template>
                        <v-list-item
                          v-for="(item1,i) in item.resource.view"
                          :key="i"
                          link
                          @click="editResource(item,item1,'_view')"  :class="{'ide-active':item1.active}"
                        >
                        <v-icon  color="blue">mdi-home</v-icon><v-list-item-title v-text="item1.title"></v-list-item-title> <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                        </v-list-item>
                      </v-list-group>
                      <!-- 组件 -->
                      <v-list-group value="true"  v-if="item.resource.com">
                        <template v-slot:activator>
                          <v-list-item-title>组件</v-list-item-title>
                        </template>
                        <v-list-item
                          v-for="(item1,i) in item.resource.com"
                          :key="i"
                          link
                          @click="editResource(item,item1,'_com')"   :class="{'ide-active':item1.active}"
                        >
                          <v-icon  color="blue">mdi-home</v-icon><v-list-item-title v-text="item1.title"></v-list-item-title> <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                        </v-list-item>
                      </v-list-group>
                       <!-- 样式 -->
                      <v-list-group value="true"  v-if="item.resource.css">
                        <template v-slot:activator>
                          <v-list-item-title>样式</v-list-item-title>
                        </template>
                        <v-list-item
                          v-for="(item1,i) in item.resource.css"
                          :key="i"
                          link
                          @click="editResource(item,item1,'_css')"   :class="{'ide-active':item1.active}"
                        >
                          <v-icon  color="blue">mdi-home</v-icon><v-list-item-title v-text="item1.title"></v-list-item-title> <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                        </v-list-item>
                      </v-list-group>
                         <!-- 配置 -->
                      <v-list-group value="true"  v-if="item.resource.config">
                        <template v-slot:activator>
                          <v-list-item-title>配置</v-list-item-title>
                        </template>
                        <v-list-item
                          v-for="(item1,i) in item.resource.config"
                          :key="i"
                          link
                          @click="editResource(item,item1,'_config')"   :class="{'ide-active':item1.active}"
                        >
                          <v-icon  color="blue">mdi-home</v-icon><v-list-item-title v-text="item1.title"></v-list-item-title> <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                        </v-list-item>
                      </v-list-group>
                    </v-list>
                  </v-card>
                </template>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </template>
    </div>
     <!-- 右 -->
      <div class="fd-content">
       <vscode :resourcePath="item"   :resourceObjActived="resourceObjActived" v-for="(item,i) in resourceList"   :key="i"   v-show="item==resourceActived"></vscode>
    </div>
  </div>

</template>
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
      appList: [],moduleList:[],resourceList:[],resourceActived:"",resourceObjActived:{},resourceOpenList:[]
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
        /*
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "text/plain"
        }
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.moduleList = data.modules;
        });*/
 this.axios.defaults.withCredentials = false; //不允许携带cookie
    this.axios.get(url).then(res => {
     this.moduleList = res.data.modules;
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