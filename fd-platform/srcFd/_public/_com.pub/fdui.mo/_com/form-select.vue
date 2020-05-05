<template>
<div>
  <div    v-if="!hidden&&hidden!=''">
    <div   v-if="!type||type==''" class="fd-form-select"   @click="select()"><span v-for="(item,i) in valueSelect" :key="i">{{item.title}}</span></div>
    <van-button type="info" block  @click="select()" v-if="type=='button'"><slot></slot></van-button>
    </div>
<van-action-sheet v-model="show" title="标题">
  <div :style="{height:screenHeight}">

 <fd-form-checkbox :bind.sync="value" :options="options"></fd-form-checkbox>

  <van-button type="info" block @click="consure()">确定</van-button>
  </div>
</van-action-sheet>
</div>
    
 </template>
<style>
  .fd-form-select{
    width:100%;height:50px;
  }
  </style>
<script>
 
  export default{
    props:["type","hidden","options"],
      data() {
        return {
        screenHeight:document.body.clientHeight+200+"px",
        show:false,
        nextUser:[],peopleList:[],
        value:[],valueSelect:[]
        }
        
      },
    created:function(){

    },
    methods:{
        select:function(fun){
            this.show = true;
            this.callback = fun;
        },
        consure:function(){
            this.valueSelect = this.value;
             this.show = false;
             if(typeof(this.callback)=="function"){
               this.callback(this.valueSelect);//回调
             }
        }
    },
    watch:{
        valueSelect(value){//监控 value对象
              this.$emit("update:bind",value);//同步到父组件，注意父组件中的  :value.sync
        }
    }
  }
  </script>