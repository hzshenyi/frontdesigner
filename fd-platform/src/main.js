import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import "./plugins/fdclient.js" 

Vue.config.productionTip = false;
Vue.prototype.$fd.load(router);
new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app')
 