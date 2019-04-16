// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(iView)
Vue.use(ElementUI)
// Vue.prototype.HOST = '/api'

Vue.config.productionTip = false

// import axios from 'axios';
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
// axios.defaults.headers.post["Content-type"] = "application/json"
// 
// 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
