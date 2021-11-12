const collect = async (ctx) => {
  try {
    console.log(ctx.request)
    ctx.status = 200
  } catch (e) {
    ctx.logger.error(e)
  }
}


module.exports = {
  'POST /collect': collect,
}
