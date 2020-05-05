<template>
  <div>
    nextNode
    {{this.$store.state.count}}
    <el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
<uniflow-trace></uniflow-trace>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      dialog:true,
      userInfo: { title: "张三2" }
    };
  },
  name: "Home",
  components: {},
  methods: {
    test: function() {
      debugger
      this.dialog = true;
    }
  }
};
</script> 