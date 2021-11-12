const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('@koa/cors')

const route = require('../serve/route')
const render = require('../library/render')

const app = new Koa()

app.use(
  cors({
    'Access-Control-Allow-Credentials': true,
  }),
)
app.use(
  bodyParser({
    multipart: true,
    parsedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
)

app.use(async (ctx, next) => ctx.path.match(/^\/api/) ? await route()(ctx, next) : await render(ctx, next))

app.listen(9527)