import One from './components/One/One.vue'
import Two from './components/Two/Two.vue'
import Personal from './components/Personal/Personal.vue'
import Songs from './components/Songs/Songs.vue'
import Board from './components/Board/Board.vue'
// 配置路由
  var routes = [
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/songs',
      component: Songs,
      redirect:'/one',
      children:[
        {path:'/one',component:One},
        {path:'/two',component:Two}
      ]
    },
    {
      path: '/board',
      component: Board
    },
    // 重定向
    {path:'*',redirect:'/personal'}
  ]

  export default routes