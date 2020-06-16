<template>
  <div>
    <ul>
      <li v-for='(item,index) in message'>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        message: ''
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData:function(){
        var that = this;  //用that去保存vue的实例
        that.$axios.get('/list/index').then(function (res) {
          that.message = res.data.list
          console.log(res);
        })
      }
    }
  }
</script>