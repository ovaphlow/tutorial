const cluster = require('cluster')

const app = require('./app')
const config = require('../config')

if (cluster.isMaster) {
  console.info(`启动 Web 服务`)
  console.info(`主进程 PID: ${process.pid}`)

  for (let i = 0; i < config.webServer.numChildProcesses; i++) {
    cluster.fork()
  }

  cluster.on('online', worker => {
    console.info(`子进程 PID: ${worker.process.pid}, 端口: ${config.webServer.port}`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.info(`子进程 PID: ${worker.process.pid} 终止, 错误代码: ${code}, 信号: ${signal}`)
    console.info(`创建新的子进程`)
    cluster.fork()
  })
} else {
  app.listen(config.webServer.port)
}