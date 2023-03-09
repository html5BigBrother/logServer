import Router from 'koa-router'
import DemoRoute from './demo.js'
import MonitorRoute from './monitor.js'
import UserRoute from './user.js'

const router = new Router()

router.use('/demo', DemoRoute.routes())
router.use('/monitor', MonitorRoute.routes())
router.use('/user', UserRoute.routes())

export default router