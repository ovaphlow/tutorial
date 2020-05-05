const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const Router = require('@koa/router')
const uuid = require('uuid')

const config = require('../config')

const packageDefinition = protoLoader.loadSync(__dirname + '/../protos/user.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const proto = grpc.loadPackageDefinition(packageDefinition).user
const grpcClient = new proto.User(
  `${config.grpcServer.host}:${config.grpcServer.port}`,
  grpc.credentials.createInsecure()
)

const router = new Router({
  prefix: '/api/common-user'
})

module.exports = router

router.get('/sign-in', async ctx => {
  const fetch = body => {
    return new Promise((resolve, reject) => {
      grpcClient.signIn({data: JSON.stringify(body)}, (err, response) => {
        if (err) {
          console.error(err)
          reject(err)
          return
        }
        resolve(JSON.parse(response.data))
      })
    })
  }
  try {
    ctx.response.body = await fetch(ctx.request.query)
  } catch (err) {
    console.error(err)
    ctx.response.body = {message: '服务器错误'}
  }
})

router.get('/sign-up', async ctx => {
  const fetch = body => {
    return new Promise((resolve, reject) => {
      grpcClient.signUp({data: JSON.stringify(body)}, (err, response) => {
        if (err) {
          console.error(err)
          reject(err)
          return
        }
        resolve(JSON.parse(response.data))
      })
    })
  }
  try {
    if (!!!ctx.request.query.username || !!!ctx.request.query.password) {
      ctx.response.body = { message: '请完整填写所需信息', content: '' }
      return
    }
    const data = Object.assign({
      uuid: uuid.v5(ctx.request.query.username, config.app.namespaceByteArray)
    }, ctx.request.query)
    console.info(data)
    ctx.response.body = await fetch(Object.assign({
      uuid: uuid.v5(ctx.request.query.username, config.app.namespaceByteArray)
    }, ctx.request.query))
  } catch (err) {
    console.error(err)
    ctx.response.body = {message: '服务器错误'}
  }
})
