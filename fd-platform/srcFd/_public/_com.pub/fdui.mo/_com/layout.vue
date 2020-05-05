<template>
  <div class="fd-layout">
    <slot></slot>
  </div>
  </template>
<style>
    /* fd组件样式 */
.fd-layout{
 display:flex;width:100%;height:100%;
}
.fd-layout.fd-layout-ud{
  flex-direction:column;
}
.fd-layout-head{
 height:100px;
}
.fd-layout-left{
  width:200px;
}
.fd-layout-content{
  width:100%;height:100%;overflow-y:auto;
}
.fd-layout-border{
  border:1px rgb(173, 173, 172) solid;
}
.fd-layout-foot{
  height:30px;
}

</style>
<script>
 
  export default{
    
  }
  </script>