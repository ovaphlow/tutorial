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
const client = new testProto.Test(
  `${config.gRPCServer.host}:${config.gRPCServer.port}`,
  grpc.credentials.createInsecure()
) // Test是proto文件中的Service值

const router = new Router({
  prefix: '/api/test'
})

router
  .get('/', async ctx => {
    const fetch = () => {
      return new Promise((resolve, reject) => {
        client.list({data: 'request for list'}, (err, response) => {
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
      ctx.response.body = await fetch()
    } catch (err) {
      console.error(err)
      ctx.response.body = {message: '服务器错误'}
    }

    // const sequelize = require('../../grpc/sequelize')
    // let sql = `
    //   select * from public.user order by id desc limit 20
    // `
    // try {
    //   let result = await sequelize.query(sql, {
    //     type: sequelize.QueryTypes.SELECT
    //   })
    //   ctx.response.body = {message: '', content: result}
    // } catch (err) {
    //   console.error(err)
    //   ctx.response.body = {message: 'gRPC服务器错误'}
    // }
  })
  .post('/', async ctx => {
    const fetch = () => {
      return new Promise((resolve, reject) => {
        client.save({name: '11231'}, (err, response) => {
          if (err) {
            console.error(err)
            reject(err)
            return
          }
          resolve(response)
        })
      })
    }
    try {
      ctx.response.body = await fetch()
    } catch (err) {
      console.error(err)
      ctx.response.body = {message: '服务器错误'}
    }
  })

router
  .get('/:id', async ctx => {
    const fetch = () => {
      return new Promise((resolve, reject) => {
        client.get({data: JSON.stringify(ctx.params)}, (err, response) => {
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
      ctx.response.body = await fetch()
    } catch (err) {
      console.error(err)
      ctx.response.body = {message: '服务器错误'}
    }
  })

module.exports = router