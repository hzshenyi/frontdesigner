<template>
   <fd-layout  style="background-color:#f1f1f1;height:95%"  class="fd-layout-ud">
        <!-- 头 -->
  <fd-layout-head  style="height:50px" >
 
 <van-tabs v-model="active"    @click="onChangeTabs" >
  <van-tab title="基本信息"></van-tab>
  <van-tab title="审批历史"></van-tab>
  <van-tab title="附件"></van-tab>
 
</van-tabs>
    </fd-layout-head>
    <!-- 主体 -->
    <fd-layout-content>
<van-swipe  ref="swipe"   @change="onChange"  indicator-color="white"   style="width:96%;margin-left:auto;margin-right:auto;margin-top:10px;">
      <van-swipe-item>
     <detailsForm></detailsForm>
      </van-swipe-item>
        <van-swipe-item>
    <detailsRecord></detailsRecord>
      </van-swipe-item>
    </van-swipe> 

    </fd-layout-content>
  <!-- 底部  -->
<fd-layout-foot  style="height:50px" >
<div style="margin: -10;" >
       <van-row  gutter="2" type="flex" justify="space-around">
  <van-col span="8"  v-for="item in items" :key="item.typevalue">
    <van-button  block type="info" native-type="submit" @click="submit(item)">
      {{item.typevalue}}
    </van-button>
  </van-col>
 <van-col span="8" v-if="data.moreAction">
    <van-button  block type="info" native-type="submit" @click="decision()">
      更多
    </van-button>
  </van-col>
</van-row>
   
  </div>
 <fd-form-select  :options="peopleList" ref="nextUser"  hidden></fd-form-select>

</fd-layout-foot>

  </fd-layout>

</template>
<style   lang="scss">
    @import '../_css/var.scss';
  .van-tab span{
     color:$font-color;font-size:$header-font-size;font-family:$header-font-family;
  }
  </style>
<script>
  import detailsForm from "./details-form.vue"
   import detailsRecord from "./details-record.vue"
    import decision from "./decision.vue"
// 全局注册 
export default {
    data() {
        return {
          data:{},
            screenHeight:document.body.clientHeight+100+"px",
            checked: true,
            show: false,
            active: 0,
            decisionComponent:"",
            items: null,
            formData:null,nextUser:[],peopleList:null
        };
    },

    components: {detailsForm,detailsRecord},
    created() { 
    
      //获取决策接口
    let url = window.$fd.service["moa"]+"?open&page=Data_getDecision.jssp";//得到moa服务接口地址
    let postData =this.$route.params.param;
     this.$fd.post(url,postData,(data)=>{
       
          this.items = data.typelist;
          this.data.moreAction = true;
      })
    },
    methods: {
       onChangeTabs:function(index){
            this.$refs.swipe.swipeTo(index)
       },
        onChange:function(index){
         this.active = index;
       },
       decision:function(){
         debugger;
         this.decisionComponent = "decision";
         this.show = true;
       },
       submit:function(item){
        item.peoplelist.map((o)=>{
          
           o.title = o.peoplename;
           o.value = o.peopleid;
         }); 

         this.peopleList = item.peoplelist;
           this.$refs.nextUser.select(function(value){
             alert(value[0].title)
         });
       
       }
    }
};

 
  </script>