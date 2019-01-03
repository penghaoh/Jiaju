// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui'; //引入element-ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui组件库的css文件
Vue.use(ElementUI); //使用ElementUI组件库

// import store from './vuex/store'
// import {userToken} from "./vuex/mutations";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //获取用户登录成功后储存的登录标志
  let getFlag = sessionStorage.getItem("Flag");
// console.log('getFlag',getFlag);
// console.log('sessionStorage.getItem',sessionStorage.getItem('userName'));
// console.log('to.meta.isLogin',to.meta.isLogin);
  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){
    next()
  }else{//如果登录标志不存在，即未登录
    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/',
      })
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
