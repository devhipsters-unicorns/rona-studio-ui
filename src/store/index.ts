import { createStore, Store } from 'vuex'

import user from './modules/User'
import message from './modules/Message'

const store: Store<any> = createStore({
  modules: {
    user,
    message,
  },
})

export default store
