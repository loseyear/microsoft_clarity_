const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('@koa/cors')

const route = require('../serve/route')
const sql = require('../library/sql')

const app = new Koa()

app.use(
  cors({
    credentials: true,
  }),
)

app.use(
  bodyParser({
    multipart: true,
    parsedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
)

app.use(async (ctx, next) => sql(ctx, next, app))
app.use(async (ctx, next) => await route()(ctx, next))

app.listen(9527)
