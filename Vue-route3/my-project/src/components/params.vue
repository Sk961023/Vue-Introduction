<template>
    <div>
        <h2>{{msg}}</h2>
        <p>news:{{$route.params.newsId}}</p>
        <p>newsTitle:{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg:'I`am ParamsPage'
            }
        },
        beforeRouteEnter:((to, from, next) => {
            console.log('进入路由')
            next()
        }),
        beforeRouteLeave:(to, from, next) => {
            console.log('准备离开')
            next()
        }
    }
</script>