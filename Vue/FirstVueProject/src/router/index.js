// <!-- Auth: Jay Annadurai            -->
// <!-- Proj: N320: Vue - Teams        -->
// <!-- Date: 28 November 2023         -->
// <!-- Desc: Vue Router for a Vue SPA -->

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'

const routes = [
  //Note, Home & Members View Lead to the Same View Essentially
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/members',
    name: 'members',
    component: HomeView
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
