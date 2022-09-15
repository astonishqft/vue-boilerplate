import Vue from 'vue'
import Router from 'vue-router'

import { constantRouterMap } from '@/config/router.config'

Vue.use(Router)

const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: constantRouterMap
  })
}

// 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

const router = createRouter()

export default router
