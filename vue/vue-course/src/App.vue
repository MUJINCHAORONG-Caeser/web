<template>
  <div id="app">
    <div id="nav">
      <!-- router-link组件中封装了一个a标签，也就是链接标签
      里面的重要属性叫to，它指定的值是一个路径
      router-view是视图渲染组件，通过router-link跳转的页面加载都组件都会在
      router-view中进行渲染-->
      <router-link to="/">Home</router-link> |
      <!--router-link to="/about">About</router-link-->
      <!-- 可以简写为:to="{name:'about'}"，这是命名路由，通过router.js中定义的name属性进行跳转-->
      <router-link v-bind:to="{name: 'about'}">About</router-link>
    </div>
    <!-- 页面过渡效果 -->
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <!-- 命名视图，在一个页面里可以显示多个视图-->
      <router-view key="email" name="email"></router-view>
      <router-view key="tel" name="tel"></router-view>
    </transition-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransition:''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && this.routerTransition = to.query.transitionName
    }
  }
}
</script>
<style lang="less">
// 页面还未显示，即将显示的状态
.router-enter{
  //页面透明度0表示不显示
  opacity: 0;
}
.router-enter-active{
  transition:  opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
// 页面离开时的效果
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition:  opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
