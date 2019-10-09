const sequelize = require('../sequelize')

module.exports = {
  list: async (call, callback) => {
    let sql = `
      select * from public.user order by id desc limit 20
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT
      })
      callback(null, {data: JSON.stringify({message: '', content: result})})
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
