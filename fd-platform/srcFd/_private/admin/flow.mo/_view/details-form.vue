<template>
<div>  
 
  <van-form>
  <van-field v-for="item in items"
   :key="item.itemid"
    :name="item.itemid"
    :label="item.itemname"
    :value="item.itemvalue"
    placeholder=""
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
 
 
</van-form>
  </div>
  
</template>
<style>
    .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
    </style>
<script>
// 全局注册
export default {

    data() {
        return {
            show:true,
          items:[{

        "itemname": "申请编号",

    }, {

        "itemname": "申请部门",

    }, {

        "itemname": "申请人",

    }, {

        "itemname": "申请日期",

    }, {

        "itemname": "标题",

    }, {

        "itemname": "是否为补单",

    }, {

        "itemname": "是否为补单",

    }, {

        "itemname": "车牌号",

    }, {

        "itemname": "车辆级别",

    }, {

        "itemname": "品牌类型",

    }, {

        "itemname": "联系人",

    }, {

        "itemname": "联系人电话",

    }, {

        "itemname": "出车事由",

    }, {

        "itemname": "出车事由",

    }, {

        "itemname": "出车地点",

    }, {

        "itemname": "出车地点",

    }, {

        "itemname": "目的地",

    }, {

        "itemname": "用车开始日期",

    }, {

        "itemname": "用车结束日期",

    }, {

        "itemname": "备注",

    }
]
,
          formData:null
        };
    },

    components: {},
    beforeCreate(){
         this.$fd.Toast.loading({
  message: '加载中...',
  forbidClick: true
});
    },
    created(){
       let url = window.$fd.service["moa"]+"?open&page=Data_details.jssp";//得到moa服务接口地址
    let postData =this.$route.params.param;

     this.$fd.post(url,postData,(data)=>{
       
          this.items = data.resultlist[0].secondlist[0].thirdlist;
         this.$fd.Toast.clear();
      })
    },
    mounted() {
    
   
     // this.formData = this.$store.state.data.resultlist[0].secondlist[0].thirdlist;
    },
    methods: {
       
    }

};

 
  </script>