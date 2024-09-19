import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Chart, registerables } from 'chart.js'
import VueChart from 'vue-chartjs'
import Vue3Notification from '@kyvg/vue3-notification'
// import {createPinia} from 'pinia'

Chart.register(...registerables)

const app = createApp(App)

app.config.globalProperties.hostname = "https://localhost:44316" 
// app.use(createPinia())
app.use(VueChart)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(Vue3Notification)
app.mount('#app')

