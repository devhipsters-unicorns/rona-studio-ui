import VueRouter, { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/dashboard/DashboardComponent.vue'

const routes: Array<any> = [
  {
    path: '/',
    name: 'home',
    component: Dashboard,
  },
]

const router: VueRouter.Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
