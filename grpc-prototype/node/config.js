const os = require('os')

const config = {
  env: 'development',
  webServer: {
    port: 5400
  },
  grpcServer: {
    port: 5401
  },
  storage: {
    user: 'kill8268',
    password: '',
    host: '192.168.1.246',
    database: 'hengda',
    pool: {
      min: os.cpus().length,
      max: os.cpus().length * 2
    },
    logging: false
  }
}

module.exports = config
