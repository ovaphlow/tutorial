const os = require('os')

const config = {
  env: 'development',
  app: {
    port: 9100,
    numChildProcesses: os.cpus().length
  },
  postgres: {
    username: 'ovaphlow',
    password: 'dsdfjk',
    host: '127.0.0.1',
    port: '5432',
    database: 'ovaphlow',
    pool: {
      size: os.cpus().length
    }
  }
}

module.exports = config
