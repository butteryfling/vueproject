import Vue from 'vue'
import App from './App.vue'
// 下面两行代码来自vue路由文档的说明
import Router from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router'
import VueSwiper from 'vue-swiper'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueSwiper)

var router = new Router({
  routes,
  linkActiveClass: 'active'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
