const path = require('path')

const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const proxy = 'http://127.0.0.1:8090'

// let staticPath = path.join(path.normalize(__dirname + '/..'), 'webapp')
app.use(express.static('static'))

app.use('/lib', express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/api/user/login', (req, res) => {
  console.log(req.method, req.originalUrl)
  console.log(req.body.account)
  axios({
    url: proxy + req.originalUrl,
    method: 'POST',
    data: req.body,
    responseType: 'json'
  }).then((response) => {
    console.log(response.data)
    res.json(response.data)
  }).catch((error) => {
    console.log(error)
    res.json(error)
  })
})

app.post('/api/user/register', (req, res) => {
  console.log(req.method, req.originalUrl)
  res.json({status: 200})
})

app.listen(80)

console.log(`服务器启动，端口： 80`)
console.log('静态文件位置： ./static')
