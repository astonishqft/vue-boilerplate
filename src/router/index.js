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

const router = createRouter()

export default router
