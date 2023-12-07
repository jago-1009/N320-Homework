import App from './App.vue'
import ConferenceInfo from './views/ConferenceInfo.vue'
import NavBar from '/components/NavBar.vue'
import myConferences from './views/myConferences.vue'
import { createRouter, createWebHistory } from './vue-router'

import { createApp } from './vue'

const routes = [
  { path: '/', component: ConferenceInfo, name: 'default' },
  { path: '/mySessions', component: myConferences, name: 'mySessions' },
  { path: '/sessions', component: ConferenceInfo, name: 'sessionInfo' }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
const app = createApp(App)
app.component('NavBar', NavBar)
app.component('ConferenceInfo', ConferenceInfo)
app.component('MyConferences', myConferences)
app.use(router)
// app.config.warnHandler = () => {}
app.mount('#app')
