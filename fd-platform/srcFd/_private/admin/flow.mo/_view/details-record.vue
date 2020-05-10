<template>
 <div>
<van-steps direction="vertical" :active="0">
  <van-step v-for="(item,i) in items" :key="i">
      <van-cell :title="item.nodeName" :value="item.handler" size="large" :label="item.getTime" />
    
  </van-step>

</van-steps>
</div>
</template>
<style>
    .van-step__circle{
      font-size:20px;
    }
</style>
<script>
// 全局注册
export default {
    data() {
        return {
          items:null
        };
    },

    components: {},
    created() {
      
       let url = window.$fd.service["moa"]+"?open&page=Data_approvalhistory.jssp";//得到moa服务接口地址
    let postData =this.$route.params.param;
     this.$fd.post(url,postData,(data)=>{
       
          this.items = data;
      })
    },
    methods: {
       
    }

};

 
  </script>


