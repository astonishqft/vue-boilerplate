import storage from 'store'
import { SIDEBAR_TYPE } from '../mutation-types'

const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: 'dark'

  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      storage.set(SIDEBAR_TYPE, type)
    }
  },
  actions: {

  }
}

export default app
