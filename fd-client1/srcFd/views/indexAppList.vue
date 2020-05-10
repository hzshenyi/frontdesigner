<!-- App.vue -->
<template>
  <!-- App.vue -->
  <div class="fd-layout">
    <indexApp :app="item" v-for="(item,i) in appList" :key="i"  v-show="item==$route.params.app"></indexApp>
  </div>
</template>
 
<script>
import indexApp from "./indexApp.vue";
export default {
  components: { indexApp },
  data() {
    return {
      appList: []
    };
  },
  created() {
     this.$store.state.spaceDraw = false;
    this.loadApp();
    
  },
  watch: {
    $route(value) {
      this.loadApp();
    }
  },
  methods: {
    loadApp: function() {
      let app = this.$route.params.app;
      if (this.appList.indexOf(app) == -1) {
        this.appList.push(app);
      }
    }
  }
};
</script>