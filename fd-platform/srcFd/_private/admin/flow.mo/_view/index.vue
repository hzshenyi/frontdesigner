<template>
  
<div>
  <van-sticky>
   <van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="onClickLeft" class="header">
  <template #right>
    <van-icon name="search" size="18" /> 
  </template>
</van-nav-bar>
</van-sticky>
<transition :name="transitionName"> 
  <keep-alive  include="app,todolist">
<router-view class="Router"></router-view>
</keep-alive>
　　　　　　
</transition>
 
</div>
</template>  
<style  lang="scss">
  @import '../_css/var.scss';
  html,body{
    width:100%;height:100%;
     color: $header-color;
  }
  .header{
    background-color:$header-color;
  }
  .header div,.header span{
    color:$header-font-color;font-size:$header-font-size;font-family:$header-font-family;
  }
  .header i{
     color:$header-font-color !important;
  }
  .van-cell{
     color:$font-color;font-size:$header-font-size;font-family:$header-font-family;
  }
  .Router {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
     top: 45px;
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
<script>
 
 import { Toast } from 'vant';

// import todoList from "./todoList.vue"
  export default {
  data() {
    return {
      transitionName:"slide-right",
      currentView:"todoList",
       items:null
    };
  },
　　watch: {
        　　　 '$route'(to, from) {
            　　　　let isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
                　　　　　　if(isBack) {
                　　　　　　　　this.transitionName = 'slide-right'
                    　　　　　　
            }
            else {
                　　　　　　 this.transitionName = 'slide-left'
                    　　　　　
            }
            　　this.$router.isBack = false
                　　
        }
        　
    },
  components: {},
  created(){
   
  },
  methods:{
     onClickLeft() {
       this.$router.isBack = true;
      this.$router.back();
      this.$fd.Toast('返回');
    },
  }


  
}; 
  </script> 