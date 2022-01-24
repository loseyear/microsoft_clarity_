const { decode } = require('clarity-decode')

const test = async (ctx) => {
  try {
    ctx.status = 200
    ctx.body = 'it works'
  } catch (e) {
    console.log(e)
  }
}

const getCollect = async (ctx) => {
  try {
    const rst = await ctx.sql.track.findAll({
      attributes: ['userid', 'username', 'timestamp', 'data'],
    })
    ctx.body = rst
  } catch (e) {
    console.log(e)
  }
}

const postCollect = async (ctx) => {
  try {
    console.log(ctx.request.body)
    const data = ctx.request.body
    if (!Object.keys(data).length) {
      ctx.status = 200
      return
    }
    const format = decode(data)
    await ctx.sql.track.create({
      userid: format.envelope.userId,
      username: ctx.cookies.get('username'),
      timestamp: format.timestamp,
      data: JSON.stringify(format),
    })
    ctx.status = 200
  } catch (e) {
    console.log(e)
  }
}


module.exports = {
  'GET /collect': getCollect,
  'POST /collect': postCollect,
}
