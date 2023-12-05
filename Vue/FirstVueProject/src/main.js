// Auth: Jay Annadurai
// Proj: N320: Vue - Teams
//Date: 28 November 2023
//Desc: Vue JS Loading File

import InputForm from './components/InputForm.vue'
import Roster from './components/Roster.vue'
import Member from './components/Member.vue'
import SlotButton from './components/SlotButton.vue'
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('input-form', InputForm)
app.component('roster', Roster)
app.component('member-info', Member)
app.component('slot-button', SlotButton)

app.use(router)
app.mount('#app')
