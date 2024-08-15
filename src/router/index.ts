import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import GridView from '../views/GridView.vue'

import DetailView from '../views/DetailView.vue'
import Editor from '../views/Editor.vue'

import MainViewVue from '@/views/MainView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component:MainViewVue,
      children:[
        {path:'/',name:'home',component:GridView},
        {path: '/about',name: 'about',component: () => import('../views/AboutView.vue')},
        {path:'/template/:postId',name:'template',component: DetailView}
      ]
    },
    {

      path:'/editor',
      name:'editor',
      component:Editor
      

    }
    
    

  ]
})

export default router
