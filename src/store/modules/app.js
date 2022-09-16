import storage from 'store'
import { loadLanguageAsync } from '@/locales'
import { SIDEBAR_TYPE, APP_LANGUAGE } from '../mutation-types'

const app = {
  state: {
    sideCollapsed: false,
    isMobile: false,
    theme: 'dark',
    lang: 'en-US', // 默认的国际化语言
    _antLocale: {} // 默认的antd组件的国际化组件
  },
  mutations: {
    [SIDEBAR_TYPE]: (state, type) => {
      state.sideCollapsed = type
      storage.set(SIDEBAR_TYPE, type)
    },
    [APP_LANGUAGE]: (state, lang, antd = {}) => {
      state.lang = lang
      state._antLocale = antd
      storage.set(APP_LANGUAGE, lang) // 往localStorage里面也存一份
    }
  },
  actions: {
    setLang ({ commit }, lang) {
      return new Promise((resolve, reject) => {
        commit(APP_LANGUAGE, lang)
        loadLanguageAsync(lang).then(() => {
          resolve()
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}

export default app
