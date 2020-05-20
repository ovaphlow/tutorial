const Router = require('koa-router')

const router = new Router({
  prefix: '/api/test'
})

router
  .get('/', ctx => {
    console.info('处理请求')
    ctx.response.status = 200
    ctx.response.body = {
      message: '',
      content: ''
    }
  })

module.exports = router