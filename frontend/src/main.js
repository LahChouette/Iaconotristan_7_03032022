import { createApp } from 'vue'
import App from './App.vue'
import { router } from './_helpers/router'
//import store from './store'

createApp(App).use(router).mount('#app')
