const { Pool } = require('pg')

const config = require('./config')

const pool = new Pool({
  user: config.postgres.username,
  password: config.postgres.password,
  host: config.postgres.host,
  port: config.postgres.port,
  database: config.postgres.database
})

module.exports = pool
