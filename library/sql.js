const fs = require('fs')
const path = require('path')

module.exports = async (ctx, next, app) => {
  const APP = app
  APP.context.sql = {}
  const dir = [
    'serve',
  ]
  dir.forEach(
    v => fs
      .readdirSync(path.join(__dirname, `../${v}/model`))
      .filter(f => f.endsWith('.js'))
      .forEach((f) => APP.context.sql[f.split('.')[0]] = require(path.join(__dirname, `../${v}/model/`, f)))
  )

  await next()
}
