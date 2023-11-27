import propsone from './components/PropsOne.vue'
import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
app.component('props-one', propsone)
app.mount('#app')
