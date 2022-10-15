import { createApp } from 'vue'
import App from '@/App.vue'
import BaseLayout from '@/layouts/BaseLayout'
import BackRef from '@/util/components/backref/BackRef'
import router from '@/router'

const app = createApp(App)
app.use(router)

app.component('BaseLayout', BaseLayout)
app.component('BackRef', BackRef)

app.mount('#app')
