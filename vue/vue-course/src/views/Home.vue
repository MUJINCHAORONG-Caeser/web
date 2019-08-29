<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">返回上一页</button>
    <button @click="handleClick('replace')">替换上一页</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 此时是正要跳转，但是页面还未渲染，因此此时无法使用this.来获取组件内容的
  beforeRouteEnter (to, from, next) {
    console.log(from.name)
    // next中的vm就是组件的实例
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to,from, next) {
    // 离开前要做的事情
    const leave = confirm('您确定要离开吗？')
    if (leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      // 获取路由实例,回退一页
      // this.$router.go(-1)
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
      else if (type === 'replace') {
        const name = 'lison'
        this.$router.replace({
          // name: 'argu',
          // params: {
          //   name: 'lison'
          // }
          path: `/argu/${name}`
          // 参数
          // query: {
          //   name: 'lison'
          // }
        })
      }
    }
  }
}
</script>
