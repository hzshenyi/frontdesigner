<template>
<v-card
    class="fill-height"
    max-width="600"
  >
    <v-card-title>
      <h2 class="display-1">开发配置</h2>
      <v-spacer></v-spacer>
      <span class="title"></span>
    </v-card-title>

    
  <v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="12" md="12">
          <v-text-field
            label="资源服务接口地址"
            outlined v-model="resourceHost" placeholder="例：http://127.0.0.1:3000"
          ></v-text-field>
        </v-col>

       <v-col cols="12" sm="12" md="12">
          <v-text-field
            label="演示服务器地址"
            outlined v-model="demoHost" placeholder="例：http://127.0.0.1:8080"
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
    
    </v-card>


</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      resourceHost: "", demoHost: "",
    }),
    watch:{
      resourceHost(value){
           this.$cookies.set("fd-resourceHost",value);
      },
      demoHost(value){
           this.$cookies.set("fd-demoHost",value);
      }
    },
    mounted () {
      let resourceHost = this.$cookies.get("fd-resourceHost");
     this.resourceHost = resourceHost
     this.demoHost = this.$cookies.get("fd-demoHost");
    },
  }
</script>