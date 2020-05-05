<template>
  <div>
    <nextNode></nextNode>
  </div>
</template>
<script>
 
import nextNode from "../_com/nextNode.vue"
  export default {
  data() {
    return {
    
    };
  },

  components: {nextNode},
  mounted(){
    this.$store.state.count=222
  }
  
}; 
  </script>