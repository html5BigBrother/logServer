import Router from 'koa-router'

const router = new Router()


router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/trace/collect', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/trace/list', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

export default router
