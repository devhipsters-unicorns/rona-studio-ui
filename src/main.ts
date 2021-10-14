import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import emitter from './eventBus'
import moment from 'moment'
// @ts-ignore
import VueFeather from 'vue-feather'

moment.locale('en-US')

const app = createApp({
  setup() {
    provide('eventBus', emitter), provide('moment', moment)
  },
  render() {
    return h(App)
  },
})
app.config.globalProperties.$moment = moment
app.component(VueFeather.name as string, VueFeather)
app.use(router).use(store).mount('#app')
