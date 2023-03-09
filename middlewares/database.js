// 连接mongodb数据库
import mongoose from 'mongoose'
import models from '../models/index.js'

async function init() {
  const uri = 'mongodb://localhost:27017'
  const options = {
    dbName: 'myProject',
    // keepAlive: 120
  }
  // 建立连接
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(uri, options)

    // const Demo = mongoose.model('demo', { name: String })
    // const res = await Demo.find()
    // console.log('res', res)
    console.log('Connected successfully to server')
  } catch (error) {
    console.error('数据库连接失败：', error)
  }
}

// 数据库中间件
async function middleware(ctx, next) {
  // 为ctx注入models
  ctx.models = models
  await next()
}

export default {
  init,
  middleware
}
