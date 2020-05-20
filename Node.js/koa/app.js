const Koa = require('koa')

const app = new Koa()
const serve = require('koa-static')

app.use(serve(__dirname + '/public'))

app.use((ctx, next) => {
  console.info(`${new Date()} [${ctx.request.method}] ${ctx.request.url}`)
  next()
})

const testRouter = require('./routes/test')
app.use(testRouter.routes())

module.exports = app
