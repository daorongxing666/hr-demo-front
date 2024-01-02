import router from '@/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const whiteList = ['/login', '/404']
router.beforeEach((from, to, next) => {
  nProgress.start()
  if (store.getters.token) {
    if (to.path !== '/login') {
      next()
    } else {
      next('/')
      nProgress.done()
    }
  } else {
    if (to.path.includes(whiteList)) {
      next()
    } else {
      next('/login')
      nProgress.done()
    }
  }
})

router.afterEach(() => {
  nProgress.done()
})
