import './assets/main.css'
import TextForm from './components/TextForm.vue'
import DataList from './components/DataList.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('TextForm', TextForm)
app.component('DataList', DataList)
app.use(createPinia())
app.use(router)
app.config.warnHandler = () => {}


app.mount('#app')
