/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-24 18:05:11
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {path:'/login',component:() => import('@/views/login/index')},
  {path:'/',redirect:'/login'},
  {path:'/main',component:() => import('@/views/main/index')}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})