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
    <router-view/>
    <!-- 命名视图，在一个页面里可以显示多个视图-->
    <router-view name="email"></router-view>
    <router-view name="tel"></router-view>

  </div>
</template>

<style lang="less">
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
