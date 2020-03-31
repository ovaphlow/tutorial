const sequelize = require('../sequelize')

const { Pool } = require('pg')

const pool = new Pool({
  user: 'kill8268',
  password: '',
  host: '192.168.1.246',
  port: 5432,
  database: 'hengda'
})

const postgres = {
  query: (text, params) => pool.query(text, params)
}

module.exports = {
  list: async (call, callback) => {
    let sql = `
      select * from public.user order by id desc limit 20
    `
    // try {
    //   let result = await sequelize.query(sql, {
    //     type: sequelize.QueryTypes.SELECT
    //   })
    //   callback(null, {data: JSON.stringify({message: '', content: result})})
    // } catch (err) {
    //   console.error(err)
    //   callback(null, {data: JSON.stringify({message: 'gRPC服务器错误'})})
    // }
    try {
      let result = await postgres.query(sql, [])
      callback(null, {data: JSON.stringify({message: '', content: result.rows})})
    } catch (err) {
      console.error(err)
      callback(null, {data: JSON.stringify({message: 'gRPC服务器错误'})})
    }
  },

  get: async (call, callback) => {
    let sql = `
      select * from public.user where id = 1
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
      })
      callback(null, {data: JSON.stringify({message: '', content: {}})})
    } catch (err) {
      console.error(err)
      callback(null, {data: JSON.stringify({message: 'gRPC服务器错误'})})
    }
  }
}
