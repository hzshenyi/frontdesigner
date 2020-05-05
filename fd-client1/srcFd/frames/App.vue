<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="$store.state.spaceDraw"
      app
      clipped
    >
     <!-- 空间组件 -->
      <space></space>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="$store.state.spaceDraw = !$store.state.spaceDraw" />
      <v-toolbar-title>FrontDesigner V0.1</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>
<style>
html,
body {
  height: 100%;
}
/* fd组件样式 */
.fd-layout {
  display: flex;
  width: 100%;
  height: 100%;
}
.fd-layout.fd-layout-ud {
  flex-direction: column;
}
.fd-head {
  height: 100px;
}
.fd-left {
  width: 200px;height:100%;overflow-y:auto;
}
.fd-content {
  width: 100%;
  height: 100%;overflow-y:auto;
}
.fd-border {
  border: 1px rgb(173, 173, 172) solid;
}
.fd-foot {
  height: 30px;
}

/* ide样式 */
.ide-head {
  height: 60px;
  background-color: rgb(50, 53, 53);
  color: aliceblue;
}
.ide-content {
  padding: 10px;
  background-color: rgb(218, 217, 218);
}
.ide-foot {
  padding: 1px;
}
.ide-bg {
  background-color: rgb(191, 201, 214);
  color: rgb(21, 22, 22);
}
.ide-icon-color {
  color: rgb(255, 115, 33);
}
.ide-icon-color1 {
  color: rgb(4, 27, 140);
}
.ide-active{
   background-color: rgb(33, 103, 196);
}
 /*滚动条样式*/
.ide-scroll::-webkit-scrollbar {width:6px;}
.ide-scroll::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);background:#535353;}
.ide-scroll::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);border-radius: 0;background: rgba(0,0,0,0.1);}
</style>
<script>
import space from "../views/space.vue"
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
     this.$vuetify.theme.dark = true
    },
    components:{
      space
    }
  }
</script>