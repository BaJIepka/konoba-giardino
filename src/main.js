import { createApp } from 'vue'
import App from '@/App.vue'
import BaseLayout from '@/layouts/BaseLayout'
import router from '@/router'

const app = createApp(App)
app.use(router)

app.component('BaseLayout', BaseLayout)

app.mount('#app')
