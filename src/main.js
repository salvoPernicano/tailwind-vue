import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
//importiamo router e facciamo lo .use sull'app
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

