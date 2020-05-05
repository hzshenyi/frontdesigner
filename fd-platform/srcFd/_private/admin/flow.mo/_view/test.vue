<template>
<div>
    <fd-form-select  :bind.sync="value1" :options="options" ref="s"></fd-form-select>
 <van-button type="primary" block @click="test()">块级元素</van-button>
</div>
</template>

<script>
  
// 全局注册2
export default {
    data() {
        return {          
            value1:[],
            options:[{title:"测试1",value:"test1"},{title:"测试2",value:"test2"}]
        };
    },

    components: {},
    created() { 
      //获取决策接口
    
    },
    methods: {
    test:function(){
 
       this.$refs.s.select(function(value){
         alert(value[0].title)
       });
  
    }
    }

};

 
  </script>