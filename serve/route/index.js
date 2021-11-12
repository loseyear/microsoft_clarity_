const fs = require('fs')
const path = require('path')
const router = require('koa-router')({
  prefix: '/api',
})

const addMapping = (route, mapping) => {
  Object.entries(mapping)
    .forEach((v) => {
      const url = v[0]
      switch (true) {
        case url.startsWith('GET'):
          router.get(url.substring(4), mapping[url])
          break
        case url.startsWith('POST'):
          router.post(url.substring(5), mapping[url])
          break
        case url.startsWith('PUT'):
          router.put(url.substring(4), mapping[url])
          break
        case url.startsWith('DELETE'):
          router.delete(url.substring(7), mapping[url])
          break
        default:
      }
    })
}

const addControllers = (route, dir) => {
  fs
    .readdirSync(path.join(__dirname, '/../', dir))
    .filter(f => f.endsWith('.js'))
    .forEach(f => addMapping(route, require(path.join(__dirname, '/../', dir, '/', f))))
}

module.exports = (dir) => {
  const controllersDir = dir || 'controller'
  addControllers(router, controllersDir)
  return router.routes()
}
