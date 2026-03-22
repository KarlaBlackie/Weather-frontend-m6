import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'
import Acerca from '../views/Acerca.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomeView
    },

     { 
      path:'/acerca',
      name: 'acerca',
      component: Acerca
    },

    {
      path: '/ciudad/:id', 
      name: 'detalle',
      component: () => import('../views/DetalleView.vue'),
      props: true
    }
  ]
})

export default router
