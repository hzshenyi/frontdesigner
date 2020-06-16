<template>
  <div class="fd-layout fd-layout-ud">
    <div class="fd-head" style="height:55px">
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon left>mdi-label</v-icon>
        {{resourceObjActived.module.title}}{{resourceObjActived.resource.title}}
      </v-chip>

      <v-chip
        class="ma-2"
        
        color="indigo"
        text-color="white"
        close-icon="mdi-delete"
        @click="saveResource()"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>保存
      </v-chip>

      <v-chip class="ma-2"  color="indigo" text-color="white" close-icon="mdi-delete" @click="preview()">
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>预览
      </v-chip>
    </div>
    <div class="fd-content" style="overflow-y:hidden">
      <div
        style="width:100%;height:100%;font-size:9px;font-family:宋体"
        ref="editorContainer"
        class="ide-scroll"
      >
        <!-- <v-textarea solo height="600" v-model="body"></v-textarea> -->
      </div>
    </div>
  </div>
</template>
<script>
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js'
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
// import { StandaloneCodeEditorServiceImpl } from 'monaco-editor/esm/vs/editor/standalone/browser/standaloneCodeServiceImpl.js'

import * as monaco from "monaco-editor";

export default {
  props: ["resourcePath", "resourceObjActived"],
  data() {
    return {
      body: "null",
      type: "html"
    };
  },
  watch: {
    "$store.state.resourceBody"(value) {
      // this.loadBody(value);
    }
  },
  mounted: function() {
    this.loadResource();
  },
  methods: {
    loadBody: function(value) {
      let resourceType = this.type == "router" ? "javascript" : "html";
      let editorContainer = this.$refs.editorContainer;
      this.monaco = monaco.editor.create(editorContainer, {
        value: value,
        language: resourceType,
        automaticLayout: true
      });
    },
    loadResource: function() {
       let host = this.$fd.getResourceServiceHost();
      let url = `${host}/module/get?` + this.resourcePath;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "text/plain"
        }
      })
        .then(res => {
          return res.text();
        })
        .then(data => {
          this.loadBody(data);
        });
    },
    saveResource: function() {
       let host = this.$fd.getResourceServiceHost();
      let url = `${host}/module/save?` + this.resourcePath;
      let body = this.monaco.getValue();
      fetch(url, {
        method: "post",
        body: "body="+encodeURIComponent(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function(response) {
        console.log(response);
      });
    },
    preview:function(){
      let app = this.$route.params.app;
      let module = this.resourceObjActived.module.name+".mo";
      let resource = this.resourceObjActived.resource.name;
      let host = this.$fd.getDemoServiceHost();debugger
      let url = `${host}/${app}/#/${module}/${resource}`
      window.open(url);
    }
  }
};
</script>