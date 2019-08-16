const Koa = require('koa')

const app = new Koa()
const serve = require('koa-static')

const server = require('http').createServer(app.callback())

app.use(serve(__dirname + '/public'))

app.use((ctx, next) => {
  console.info(`${new Date()} [${ctx.request.method}] ${ctx.request.url}`)
  next()
})

const testRouter = require('./routes/test')
app.use(testRouter.routes())

server.listen(5000, () => {
  console.info(`WEB服务运行于端口 80`)
})