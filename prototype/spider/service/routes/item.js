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
    ctx.response.body = { message: 'POST', content: '' }
  })
