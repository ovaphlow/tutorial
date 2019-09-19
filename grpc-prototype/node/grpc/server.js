const cluster = require('cluster')

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

const userProto = grpc.loadPackageDefinition(
  protoLoader.loadSync(__dirname + '/../protos/user.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
).user

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

if (cluster.isMaster) {
  console.log(`${new Date()} 启动 gRPC 服务`)
  console.log(`${new Date()} 主进程 PID: ${process.pid}`)

  for (let i = 0; i < config.gRPCServer.numChildProcesses; i++) {
    cluster.fork()
  }

  cluster.on('online', worker => {
    console.log(`${new Date()} 子进程 PID: ${worker.process.pid}, 端口: ${config.gRPCServer.port}`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`${new Date()} 子进程 PID: ${worker.process.pid} 终止, 错误代码: ${code}, 信号: ${signal}`)
    console.log(`${new Date()} 由主进程(PID: ${process.pid})创建新的子进程`)
    cluster.fork()
  })
} else {
  const server = new grpc.Server()

  server.addService(testProto.Test.service, {save: save})

  const userService = require('./services/user')
  server.addService(userProto.User.service, {
    list: userService.list,
    save: userService.save,
    get: userService.get,
    update: userService.update,
    remove: userService.remove
  })

  server.bind(`0.0.0.0:${config.gRPCServer.port}`, grpc.ServerCredentials.createInsecure())
  server.start()
}