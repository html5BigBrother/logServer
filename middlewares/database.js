// 连接mongodb数据库
const { MongoClient } = require('mongodb')
var url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// Database Name
const dbName = 'myProject'

async function init() {
  // 建立连接
  try {
    await client.connect()
    console.log('Connected successfully to server')
  } catch (error) {
    console.error('数据库连接失败：', error)
  }
}

// 数据库中间件
async function middleware(ctx, next) {
  // 为ctx注入db
  ctx.db = client?.db && client.db(dbName)
  await next()
}

module.exports = {
  init,
  middleware
}
