const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('@koa/cors')

const route = require('./serve/route')

const app = new Koa()

app.use(
  cors(
    {
      'Access-Control-Allow-Origin': '172.16.16.67:8080',
    },
  ),
)
app.use(
  bodyParser({
    multipart: true,
    parsedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
)


app.use(async (ctx, next) => await route()(ctx, next))

app.listen(3000)
