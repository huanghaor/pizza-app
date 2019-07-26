// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//实现全局守卫
router.beforeEach((to,from,next)=>{
  //alert("还没登录，请先登录");
  //判断 store.gettes.isLogin === false
  if(to.path === "/login" || to.path === "/register"){
    next();
  }else{
    alert("还没登录，请先登录");
  }

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
