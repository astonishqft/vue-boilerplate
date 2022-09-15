import router from './router'
// import store from './store'
import storage from 'store'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.less'
// import Notification from 'ant-design-vue/es/vc-notification'
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { i18nRender } from '@/locales'
// import { generatorDynamicRouter } from '@/router/generator-routers' // 生成动态路由

// 将进度条置为
NProgress.configure({ showSpinner: false })
const allowList = ['login', 'register', 'registerResult']
const loginRoutePath = '/user/login'
// const defaultRoutePath = '/dashboard/workspace'

// 路由守卫，主要是用来鉴权
router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)

  // 先尝试从localStorage里面获取一下 ACCESS_TOKEN
  const token = storage.get(ACCESS_TOKEN)
  if (token) {
    // token 存在
  } else {
    // token不存在，也就是首次登陆
    if (allowList.includes(to.name)) { // 免登录的情形，这些接口是定义在 src/config/router.config.js 中的constantRouterMap(基础路由)中
      next()
    } else {
      // 如果第一次没有登录，就重定向到登录页/user/login
      // 需要注意的是，当登录根路径的时候，to.fullPath = '/'，也会被重定向到登录页
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
