import VueRouter, { createRouter, createWebHistory } from 'vue-router'
import DashboardComponent from '../components/dashboard/DashboardComponent.vue'
import MessagesComponent from '../components/messages/MessagesComponent.vue'

const routes: Array<any> = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '/messaging',
    name: 'messaging',
    component: MessagesComponent,
  },
]

const router: VueRouter.Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
