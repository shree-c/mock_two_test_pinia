import './assets/main.css'
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import primevue from 'primevue/config'
//theme
import "primevue/resources/themes/viva-dark/theme.css";
//core
import "primevue/resources/primevue.min.css";
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia'
// const BASE_API_URL = import.meta.env.VITE_BASE_API_URL
const AUTH_TOKEN = ref(localStorage.getItem('token'))
const pinia = createPinia()
const app = createApp(App)

if (import.meta.env.DEV === true)
  app.provide('DEBUG', true)
else
  app.provide('DEBUG', false)

// app.provide('BASE_API_URL', BASE_API_URL)
app.provide('AUTH_TOKEN', AUTH_TOKEN)
app.use(router)
app.use(primevue, { ripple: true })
app.use(ToastService)
app.use(pinia)
app.mount('#app')
