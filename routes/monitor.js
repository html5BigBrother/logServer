const router = require('koa-router')()

router.prefix('/monitor')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/trace/collect', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/trace/list', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
