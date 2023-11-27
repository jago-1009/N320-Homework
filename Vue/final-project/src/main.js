import App from './App.vue'
import ConferenceInfo from './components/ConferenceInfo.vue'
import NavBar from './components/NavBar.vue'

import { createApp } from 'vue'



const app = createApp(App)
app.component('NavBar', NavBar)
app.component('ConferenceInfo', ConferenceInfo)
app.mount('#app')
