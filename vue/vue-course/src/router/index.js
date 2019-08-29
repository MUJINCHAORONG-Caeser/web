import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
//import { Http2SecureServer } from 'http2';

// Router作为vue的插件需要使用vue.use进行加载
Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGINED = true
// 用beforeEach注册一个全局前置守卫
// 传入一个回调函数，里面有三个参数，to即将跳转的路由对象，from是离开的路由对象
// next是一个函数，跳转会需要这个函数
router.beforeEach((to, from, next) =>{
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({name: 'login'})
  } else {
    if (HAS_LOGINED) next({name: 'home'})
    else next()
  }
})
// 然后用Router创建一个路由实例
/*
export default new Router({
  // routes: routes
  /* TODO:默认模式就是hash，在我们的url里使用一个#，在#号的后面做路由的变化
  但是在我们的网站正式发布的时候，我们不希望看到有这个#号，就可以使用history模式
  然后使用history是需要后端的一些支持的
  
  //mode: 'hash',
  //mode: 'history',
  routes
})*/

// 导航确认之前，组件内守卫、异步路由被解析之后触发
//router.beforeResolve

// 路由跳转之后
router.afterEach((to, from) => {
  // logining = false
})

export default router