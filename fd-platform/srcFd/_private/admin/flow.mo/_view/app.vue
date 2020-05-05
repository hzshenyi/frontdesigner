<template>
 <van-grid clickable :column-num="2">
  <van-grid-item icon="home-o" :text="item.title+item.count"  v-for="item in items" :key="item.title"  @click="goTodoList(item)" />
 
</van-grid>  
</template>
<script>

// 全局注册
export default {
    name:"app",
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
        let url = window.$fd.service["moa"]+"?open&page=Data_home.jssp";//得到moa服务接口地址
    
let postData = '$$param={"type":"task","status":"todo","moduleid":"moaystest","modulestatus":"true"}'
      this.$fd.post(url,postData,(data)=>{
          this.items = data.modules;
      })
   
    },
    methods: {
        goTodoList: function (item) {
            
           let postData = '$$param='+item.toUrl;postData = postData.replace("/list/","");
           //this.$store.state.postData = postData;
           this.$router.push({path:"todoList/"+postData});
        }
    }

};

 
  </script>