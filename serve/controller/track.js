const { decode } = require('clarity-decode')
// const { Visualizer } = require('../../library/clarity.visualize')

const test = async (ctx) => {
  try {
    ctx.status = 200
    ctx.body = 'it works'
  } catch (e) {
    console.log(e)
  }
}

const collect = async (ctx) => {
  try {
    const data = ctx.request.body
    const format = Object.keys(data).length ? decode(data) : {}
    console.log(format)
    ctx.status = 200
  } catch (e) {
    console.log(e)
  }
}


module.exports = {
  'GET /test': test,
  'POST /collect': collect,
}