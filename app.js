const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const { koaBody } = require('koa-body')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const monitor = require('./routes/monitor')
const database = require('./middlewares/database')

// 初始化数据库
database.init()

// error handler
onerror(app)

// middlewares
app.use(
  koaBody({
    multipart: true
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'pug'
  })
)

// database
app.use(database.middleware)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(monitor.routes(), monitor.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
