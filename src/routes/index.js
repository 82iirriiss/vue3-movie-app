import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
    // hash모드, history모드 중 선택
    // hash모드 : https://google.com/#/search (특정화면에서 새로고침 할 때, 페이지를 찾을 수 없다는 메시지 방지)
    history: createWebHashHistory(),
    // page
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/movie',
            component:Movie
        },
        {
            path:'/about',
            component:About
        }
    ]
})