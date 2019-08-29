<template>
    <div>
        <!-- $route 当前路由对象,其中包含了params属性-->
        {{ name}}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'lison'
        }
    },
    beforeRouteUpdate (to, from, next) {
        // 在路由发生变化，组件复用时调用该钩子
        // 这里可以使用当前this组件
        console.log(to.name, from.name)
    }
}
</Script>
