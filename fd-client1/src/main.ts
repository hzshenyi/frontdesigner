import Vue from 'vue'
import './plugins/axios'
import App from '../srcFd/frames/App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/element.js'
import  './plugins/fdclient';
import  Mock from './mock/index'; 
Mock.startMock();
Vue.config.productionTip = false 

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 