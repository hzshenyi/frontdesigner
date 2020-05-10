<template>
<div>
<van-checkbox-group v-model="bind"  class="fd-form-checkbox">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in options"
      clickable
      :key="index"
      :title="item.title"
    >
    <template #right-icon>
      <van-checkbox :name="item" />
    </template>
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
    </div>
    
 </template>

<script>
 
  export default{
    props:["options"],
      data() {
        return {
        bind:[]
        }
        
      },
    
    methods:{

    },
    watch:{
        bind(value){//监控 value对象
              this.$emit("update:bind",value);//同步到父组件，注意父组件中的  :value.sync
        }
    }
  }
  </script>