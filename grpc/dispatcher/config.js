const os = require('os')

const config = {
  env: 'development',  
  app: {
    port: 5000,
    numChildProcesses: os.cpus().length,
    namespace: 'ovaphlow@CDT1123',
    // config.app.namespace.split('').map(it => it.charCodeAt())
    namespaceByteArray: [
      111, 118, 97, 112, 104, 108,
      111, 119, 64,  67,  68,  84,
      49,  49, 50,  51
    ]
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

module.exports = config
