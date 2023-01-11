const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log('ctx', ctx.req)
  ctx.yty = 'ytytytytytytytyty'
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/string', async (ctx, next) => {
  console.log('ctx', ctx)
  ctx.body = {
    code: 200,
    success: true,
    data: {
      resres: '1233321'
    }
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
