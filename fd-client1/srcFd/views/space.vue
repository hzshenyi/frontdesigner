<template>
  <v-row align="center">
    <v-expansion-panels
      :accordion="true"
      :popout="false"
      :inset="false"
      :multiple="true"
      :focusable="true"
      :disabled="false"
      :readonly="false"
      :flat="false"
      :hover="false"
      :tile="false"
      v-model="panel"
    >
      <v-expansion-panel v-for="(item,i) in items" :key="i">
        <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <template>
            <v-list>
              <v-list-item v-for="(item1,i) in item.children" :key="i" @click="goApp(item1)"  :class="{'ide-active':item1.active}">
                
                <v-list-item-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                </v-list-item-avatar>
               
                <v-list-item-content>
                  <v-list-item-title v-text="item1.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon v-if="item1.opened" color="pink">mdi-star</v-icon>
                </v-list-item-icon>

              </v-list-item>
            </v-list>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    panel: [0, 1, 2],appOpenList:[],
    items: [
      {
        title: "公共空间",
        name: "_public",
        children: [
          { title: "组件空间", name: "_com.pub" },
          { title: "模板空间", name: "_template.pub" }
        ]
      },
      {
        title: "项目空间",
        name: "_app",
        children: [
          { title: "样例项目", name: "sample.app" },
          { title: "浙江移动项目", name: "zmcc.app",active:false,opened:false},
          { title: "中移项目", name: "zy.app" }
        ]
      },
      {
        title: "个人空间",
        name: "_private",
        children: [
          { title: "admin", name: "admin",active:false,opened:false },
          { title: "李四", name: "lisi" }
        ]
      }
    ]
  }),
  created() {
    //this.$vuetify.theme.dark = true;
  },
  methods: {
    goApp: function(item) {
      
       this.appOpenList.map(function(obj){
         obj.active = false;
       })
       item.active = true;
       item.opened = true;
      this.appOpenList.push(item);
      this.$router.push({ path: "/indexApp/" + item.name }).catch(err => {
        err;
      });
     
    }
  }
};
</script>

