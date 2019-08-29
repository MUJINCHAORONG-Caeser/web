import Home from '@/views/Home.vue'
// 路由列表是个数组，里面包含着路由对象
// 一个基本的路由对象必须包含paht和component
export default [
    {
      path: '/',
      //alias: 'home'
      name: 'home',
      component: Home,
      //TODO:route是个参数，代表当前路由，但为什么可以代表？路由实例不是router吗？
      //TODO:路由实例里的参数到底是props，query还是params???
      props: route => ({
        food: route.query.food
      }),

      // 路由独享守卫
      beforeEnter: (to, from, next) => {
        if (from.name === 'about') alert("这是从about页来的")
        else alert('这不是从about页来的')
        next()
      }
    },
    /*TODO:导航守卫，它是用于在页面发生跳转到导航结束这段时间中进行一些逻辑处理
    比如说用户想要访问某个页面，就需要导航守卫来判断他是否登陆
    以及在页面权限控制时，也是由守卫来做一些处理
    */ 
    {
      path: '/about',
      // 别名
      alias: '/home_page',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 懒加载：只有当访问的时候才会加载这个组件
      // ES6箭头函数，该处没有参数，直接import
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      props: {
        food: 'banana'
      },
      // 定义页面信息
      meta: {
        title: '关于'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      // :name就是一个动态路由参数
      path: '/argu/:name',
      name: 'argu',
      component: () => import('@/views/argu.vue'),
      // 意为props使用router的params作为组件的属性。而params中有个name，会将name值传入组件中
      props: true
    },
    {
      path: '/parent',
      component: () => import('@/views/parent.vue'),
      children: [
        {
          // 嵌套路由不需要写斜线！只有父级路径才需要斜线
          // path: '/child',
          path: 'child',
          component: () => import('@/views/child.vue')
        }
      ]
    },
    {
      // 多路由视图的加载使用@param components
      path: '/named_view',
      components: {
        // 没有命令的router-view，会加载default
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue')
      }
    },
    {
      // 重定向，访问/main会重定向到/
      path: '/main',
      redirect: to => {
        return {
          name: 'home'
        }
      }
    },
    // 这种定义访问错误的路由，必须要放在最后。因为路由匹配有优先级原则，写在前面的会先匹配
    {
      // *号代表匹配任何路径
      path: '*',
      component: () => import('@/views/error_404.vue')
    }
]