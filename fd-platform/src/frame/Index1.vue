<template>
<div>
  frame1
<router-view></router-view>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left !important;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.theme--dark.v-toolbar.v-sheet{
  background-color:#1867c0 !important;
}
</style>
<script>
export default {
  data(){
    return {
     
    }
  }
}
</script>