const Router = require('@koa/router')

const postgres = require('../postgres')

const router = new Router({
  prefix: '/api/item'
})

module.exports = router

router
  .get('/', async ctx => {
    ctx.response.body = { message: '', content: [] }
  })
  .post('/', async ctx => {
    const client.await postgres.connect()
    try {
      const result = await client.query(``, [])
      console.info(result.rows[0])
      ctx.response.body = { message: 'POST', content: '' }
    } finally {
      client.release()
    }
  })
