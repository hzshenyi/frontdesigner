<template>
  <div>

      <van-list>
  <van-cell   v-for="item in items" :key="item.title"  @click="goDetails(item)">
      <van-row type="flex" justify="space-between">
  <van-col span="24" style="font-size:18px;color:#444">{{item.title}}</van-col>
</van-row>
 <van-row type="flex" justify="space-between">
  <van-col span="24"  style="font-size:14px;color:rgb(152, 144, 144)">流程名称：{{item.modulename}}</van-col>
</van-row>
 <van-row type="flex" justify="space-between">
  <van-col span="24"  style="font-size:14px;color:rgb(152, 144, 144)">工单号：{{item.applyid}}</van-col>
</van-row>
 <van-row type="flex" justify="space-between">
  <van-col span="24"  style="font-size:14px;color:rgb(152, 144, 144)">当前状态：{{item.nodename}}</van-col>
</van-row>
<van-row type="flex" justify="space-between">
  <van-col span="12"  style="font-size:14px;color:rgb(152, 144, 144)">申请人：{{item.creater}}</van-col>
   <van-col span="12" style="text-align:right;font-size:14px;color:rgb(152, 144, 144)">{{item.date}}</van-col>
</van-row>

      </van-cell>
</van-list>

  
    </div>
  
</template>
<script>
// 全局注册
export default {
    name:"todolist",
    data() {
        return {
            checked: true,
            show: false,
            active: 2,
            items: null
        };
    },

    components: {},
    created() {
        this.currentView = this.$fd.getUrlParam("page");
        let url = window.$fd.service["moa"]+"?open&page=Data_list.jssp";//得到moa服务接口地址

     //let postData = '$$param={"type":"task","status":"todo","moduleid":"applyCarApplication|busManage-sendCar|busManage-repairCar|busManage-repairCar-QX|busManage-repairCar-DS|busManage-repairCar-RC|busManage-allkind","modulestatus":"true"}'
      let postData =this.$route.params.param;
     
      this.$fd.post(url,postData,(data)=>{
          this.items = data.resultlist;
      })

    },
    deactivated(){
    
    },
    methods: {
        goDetails: function (item) {
    
         let postJson = {};
         postJson.type="task";
         postJson.status = "todo";
         postJson.moduleid = item.moduleid;
         postJson.modulestatus = "true";
         postJson.apprivalid = item.apprivalid;
         postJson.node = item.node;
         postJson.otherparam = item.otherparam;
         let postData = `$$param=${JSON.stringify(postJson)}`;
         this.$router.push({path:"../details/"+postData});
        

        }
    }

};

 
  </script>