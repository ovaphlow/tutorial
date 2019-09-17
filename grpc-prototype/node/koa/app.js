const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const config = require('../config')

const app = new Koa()

app.env = config.env

app.use(bodyParser())

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${new Date()} [${ctx.method}] ${ctx.url} - ${rt}`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

const testRouter = require('./routes/test')
app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

// app.listen(config.webServer.port, () => {
//   console.log(`${new Date()} Web 服务启动于端口 ${config.webServer.port}`)
// })

module.exports = app