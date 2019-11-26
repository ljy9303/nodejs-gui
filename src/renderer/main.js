import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './App'
import routes from './router'
import store from './store'

import LightBootstrap from './light-bootstrap-main'

Vue.use(VueRouter)
Vue.use(LightBootstrap)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
