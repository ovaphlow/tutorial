const Sequelize = require('sequelize')

const config = require('../config')

const sequelize = new Sequelize(config.storage.database, config.storage.user, config.storage.password, {
  dialect: 'postgres',

  host: config.storage.host,

  pool: {
    min: config.storage.pool.min,
    max: config.storage.pool.max
  },

  logging: config.storage.logging
})

module.exports = sequelize

