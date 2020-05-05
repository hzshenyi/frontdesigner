<template>
  <div style="height: 300px;">
  <el-steps direction="vertical" :active="1">
    <el-step :title="item.title" v-for="(item,i) in items" :key="i"></el-step>
   
  </el-steps>
</div>
  </template>

<script>
 
  export default{
    props:["items"],
    data(){
      return {
       
      }
    },
    mounted(){
     if(!this.items){
              this.items = [{title:"拟稿"},{title:"审批"},{title:"结束"}]             
      }
     
    }

  }
  </script>