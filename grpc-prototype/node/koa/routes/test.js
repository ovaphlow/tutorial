const Router = require('@koa/router')

const router = new Router({
  prefix: '/api/test'
})

router
  .get('/', ctx => {
    ctx.response.body = { message: '测试' }
  })

module.exports = router