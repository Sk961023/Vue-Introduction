import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
      alias:'/Home1'
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      // beforeEnter: (to, from, next) => {
      //   console.log(to)
      //   console.log(from)
      //   next()
      //   // 可以根据传进来的值来判断知否进行next执行跳转，（进入页面）
      // }
    },
    {
      path:'/goHome',
      redirect: '/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/Hi1',
      component:Hi1,
      alias:'/Hello'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
