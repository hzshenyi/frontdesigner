import Vue from 'vue'
import './plugins/axios'
import App from '../srcFd/frames/App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import  './plugins/fdclient';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 