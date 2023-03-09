// import { Context } from 'koa'
import demoService from '../service/demo.js'

// 模拟验证
const validate = function (rule, data) {
  return true
}

export default {
  async apiAdd(ctx) {
    const data = ctx.request.body || {}
    const validateRes = validate({}, data)
    const res = await demoService.add(ctx, data)
    ctx.response.body = {
      code: 200,
      success: true,
      message: '测试数据库新增',
      data
    }
  },
  async apiRemove(ctx) {
    const data = ctx.request.body || {}
    if (Object.keys(data).length === 0) {
      // ....
    } else {
      const res = await demoService.deleteOne(ctx, data)
      console.log('delRes', res)
    }
    ctx.body = {
      code: 200,
      success: true,
      message: '测试数据库删除',
      data
    }
  },
  async apiUpdate(ctx) {
    const data = ctx.request.body || {}
    console.log('data', data.update)
    const updateRes = await demoService.updateOne(ctx, { name: 'ytytytyt' }, data) // $set 增量更新
    console.log('updateRes', updateRes)
    ctx.body = {
      code: 200,
      success: true,
      message: '测试数据库更新',
      data
    }
  },
  async apiGet(ctx) {
    const data = ctx.request.body
    const findRes = await demoService.get(ctx, { name: 'ytytytyt'}) // findOne
    console.log('findRes', findRes)
    ctx.body = {
      code: 200,
      success: true,
      message: '测试数据库查询',
      data: findRes
    }
  }
}
