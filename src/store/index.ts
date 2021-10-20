import { createStore, Store } from 'vuex'

import user from './modules/User'

const store: Store<any> = createStore({
  modules: {
    user,
  },
})

export default store
