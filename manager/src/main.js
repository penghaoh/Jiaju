// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'; //引入element-ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui组件库的css文件
Vue.use(ElementUI); //使用ElementUI组件库

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
