<template>
    <component  :is="currentView"></component>
</template>

<script>
import Index from "./frame/Index"

export default {
    components:{
        Index
    },
  data(){
    return { 
      currentView:""
    }
  },
   created() {
    // let routeName = this.$router.history.pending?this.$router.history.pending.name:"";
      this.currentView = "Index";
  }
}
</script>