const os = require('os')

const config = {
  env: 'development',  
  app: {
    port: 5000,
    numChildProcesses: os.cpus().length
  },
  grpcServer: {
    host: '127.0.0.1',
    port: 50051,
    settings: {
      'grpc.max_send_message_length': 1024 * 1024 * 256,
      'grpc.max_receive_message_length': 1024 * 1024 * 256,
    }
  }
}

const prodConfig = {
  env: 'production',
  app: {
    port: 5000,
    numChildProcesses: os.cpus().length
  },
  grpcServer: {
    host: '127.0.0.1',
    port: 5001
  }
}

module.exports = config
