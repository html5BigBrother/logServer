
export default {
  async add(ctx, params) {
    return await ctx.models.Demo.create(params)
    // return new Promise((resolve, reject) => {
    //   ctx.models.Demo.create(params, function (err){
    //     console.log('arguments', arguments)
    //     console.log('err', err)
    //     if (err) {
    //       // ...
    //       return
    //     }
    //     resolve(true)
    //   })
    // })
  },
  async deleteOne(ctx, params) {
    return await ctx.models.Demo.deleteOne(params)
  },
  async updateOne(ctx, preParams, nextParams) {
    console.log('preParams', preParams)
    console.log('nextParams', nextParams)
    return await ctx.models.Demo.updateOne(preParams, nextParams)
  },
  async get(ctx, params) {
    console.log('params', params)
    return await ctx.models.Demo.findOne(params)
  }
}