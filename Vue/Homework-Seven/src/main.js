import './assets/main.css'
import TextForm from './components/TextForm.vue'
import DataList from './components/DataList.vue'
import HomeView from './views/HomeView.vue'
import TeamsView from './views/TeamsView.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const routes = [
  { path: '/', component: HomeView, name: 'default' },
  {
    path: '/teams',
    component: TeamsView,
    name: 'teams'
  },
  { path: '/home', component: HomeView, name: 'home' }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
const app = createApp(App)
app.component('HomeView', HomeView)
app.component('DataList', DataList)
app.component('TextForm', TextForm)
app.component('TeamsView', TeamsView)
app.use(createPinia())
app.use(router)

app.config.warnHandler = () => {}

app.mount('#app')
