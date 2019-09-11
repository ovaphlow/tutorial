const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const config = require('../config')
const sequelize = require('./sequelize')

const PROTO_PATH = __dirname + '/../protos/test.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const testProto = grpc.loadPackageDefinition(packageDefinition).test

const save = async (call, callback) => {
  // console.info(call.request)
  let sql = `
    select * from public.user order by id desc limit 20
  `
  let result = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT
  })
    .catch(err => {
      console.error(err)
      callback(null, {
        message: 'SERVER ERROR'
      })
    })
  callback(null, {
    message: JSON.stringify({
      message: '',
      content: result
    })
  })
}

const main = () => {
  const server = new grpc.Server()
  server.addService(testProto.Test.service, {save: save})
  server.bind(`0.0.0.0:${config.grpcServer.port}`, grpc.ServerCredentials.createInsecure())
  server.start()
  console.info(`${new Date()} gRpc 服务启动于端口 ${config.grpcServer.port}`)
}

main()