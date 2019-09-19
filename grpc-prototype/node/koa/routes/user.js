const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const Router = require('@koa/router')

const config = require('../../config')

const proto = grpc.loadPackageDefinition(
  protoLoader.loadSync(__dirname + '/../../protos/user.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
).user
const client = new proto.User(
  `${config.gRPCServerJava.host}:${config.gRPCServerJava.port}`,
  grpc.credentials.createInsecure()
)

const  router = new Router({
  prefix: '/api/user'
})

router
  .get('/', async ctx => {
    const list = () => {
      return new Promise((resolve, reject) => {
        client.list({}, (err, response) => {
          console.info(response)
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
      ctx.response.body = await list()
    } catch (err) {
      ctx.response.body = {message: '服务器错误'}
    }
  })

module.exports = router
