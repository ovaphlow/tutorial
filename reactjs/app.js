const path = require('path')

const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, './public')))

app.use('/lib', express.static(path.join(__dirname, 'node_modules')))

app.listen(80)

console.log(`服务器启动，端口：80`)
