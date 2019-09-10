const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const config = require('../config')

const PROTO_PATH = __dirname + '/../protos/test.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const testProto = grpc.loadPackageDefinition(packageDefinition).test

const save = (call, callback) => {
  callback(null, {
    message: `Hello ${call.request.name}`
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