import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from './eventBus'

import './assets/scss/index.scss'
const app = createApp({
  setup() {
    provide('eventBus', emitter)
  },
  render() {
    return h(App)
  },
})

app.use(router).use(store).mount('#app')
