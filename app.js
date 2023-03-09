import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import { koaBody } from 'koa-body'
import logger from 'koa-logger'
import serve from 'koa-static'
import router from './routes/index.js'
// import users from'./routes/users'
// import monitor from'./routes/monitor'

// 引入middlewares
import database from './middlewares/database.js'

import './utils/globalExtend.js'

const app = new Koa()

// 初始化数据库
database.init()

// error handler
onerror(app)

// 全局使用middlewares
app.use(
  koaBody({
    multipart: true
  })
)
app.use(json())
app.use(logger())
app.use(serve(global.getDirName(import.meta.url) + '/public'))

app.use(
  views(global.getDirName(import.meta.url) + '/views', {
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
app.use(router.routes()).use(router.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(monitor.routes(), monitor.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

export default app
