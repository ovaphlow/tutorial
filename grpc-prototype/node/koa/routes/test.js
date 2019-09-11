const Router = require('@koa/router')
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const config = require('../../config')

const PROTO_PATH = __dirname + '/../../protos/test.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const testProto = grpc.loadPackageDefinition(packageDefinition).test
const client = new testProto.Test(`localhost:${config.grpcServer.port}`, grpc.credentials.createInsecure()) // Test是proto文件中的Service值

const router = new Router({
  prefix: '/api/test'
})

router
  .get('/', async ctx => {
    const list = () => {
      return new Promise((resolve, reject) => {
        client.save({name: '1123'}, (err, response) => {
          if (err) {
            console.error(err)
            reject(err)
            return
          }
          resolve(JSON.parse(response.message))
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