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
      callback(null, {
        data: JSON.stringify({
          message: '',
          content: result
        })
      })
    } catch (err) {
      console.error(err)
      callback(null, {
        data: JSON.stringify({
          message: 'gRPC服务器错误'
        })
      })
    }
  },

  save: async (call, callback) => {
    let sql = `
      insert into
        public.user (
          master_id, username, password, name, phone, remark,
          auth_super,
          position, pinyin
        )
        values (
          :master_id, :username, :password, :name, :phone, :remark,
          :auth_super,
          :position, :pinyin
        )
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT,
        replacements: JSON.parse(call.request.data)
      })
      callback(null, {
        data: JSON.stringify({
          message: '',
          content: result
        })
      })
    } catch (err) {
      console.error(err)
      callback(null, {
        data: JSON.stringify({
          message: '服务器错误'
        })
      })
    }
  },

  get: async (call, callback) => {
    let sql = `
      select * from public.user where id = :id limit 1
    `
    call.request.id = parseInt(call.request.id)
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
        replacements: call.request
      })
      callback(null, {
        data: JSON.stringify({
          message: '',
          content: result.length === 1 ? result[0] : {}
        })
      })
    } catch (err) {
      callback(null, {
        data: JSON.stringify({message: '服务器错误'})
      })
    }
  },

  update: async (call, callback) => {
    let sql = `
      update
        public.user
      set
        username = :username,
        password = :password,
        name = :name,
        phone = :phone,
        remark = :remark,
        auth_super = :auth_super,
        position = :position,
        pinyin = :pinyin
      where
        id = :id
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.UPDATE,
        replacements: JSON.parse(call.request.data)
      })
      callback(null, {
        data: JSON.stringify({
          message: '',
          content: result
        })
      })
    } catch (err) {
      console.error(err)
      callback(null, {
        data: JSON.stringify({message: '服务器错误'})
      })
    }
  },

  remove: async (call, callback) => {
    let sql = `
      delete from public.user where id = :id
    `
    try {
      let result = await sequelize.query(sql, {
        type: sequelize.QueryTypes.DELETE,
        replacements: call.request
      })
      callback(null, {
        data: JSON.stringify({
          message: '',
          content: result
        })
      })
    } catch (err) {
      console.error(err)
      callback(null, {
        data: JSON.stringify({message: '服务器错误'})
      })
    }
  }
}