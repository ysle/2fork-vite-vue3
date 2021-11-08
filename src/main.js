import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

document.title += ` v.${import.meta.env.VITE_APP_VERSION}`
