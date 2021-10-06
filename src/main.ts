import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from './eventBus'
// @ts-ignore
import VueFeather from 'vue-feather'

const app = createApp({
  setup() {
    provide('eventBus', emitter)
  },
  render() {
    return h(App)
  },
})
app.component(VueFeather.name as string, VueFeather)
app.use(router).use(store).mount('#app')
