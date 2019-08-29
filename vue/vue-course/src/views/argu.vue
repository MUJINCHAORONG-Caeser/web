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
    }
}
</Script>
