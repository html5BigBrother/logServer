import Router from 'koa-router'
import demoController from '../controller/demo.js'

const router = new Router()

router.get('/', async (ctx, next) => {
  console.log('ctx', ctx.req)
  ctx.yty = 'ytytytytytytytyty'
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

/**
 * 数据库操作demo 增删改查
 */
router.post('/database/add', demoController.apiAdd)
router.post('/database/del', demoController.apiRemove)
router.post('/database/update', demoController.apiUpdate)
router.get('/database/get', demoController.apiGet)

export default router
