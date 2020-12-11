/*
 * @Author: your name
 * @Date: 2020-12-10 15:52:22
 * @LastEditTime: 2020-12-11 14:40:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /typescript/ts-axios/ts-axios/examples/server.js
 */
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

const router = express.Router()

router.get('/simple/get', function(req, res) {
  res.json({
    msg: `hello world`
  })
})

router.get('/base/get', function(req, res) {
    res.json(req.query)
})

// 实际上是因为我们虽然执行 send 方法的时候把普通对象 data 转换成一个 JSON 字符串，
// 但是我们请求header 的 Content-Type 是 text/plain;charset=UTF-8，
// 导致了服务端接受到请求并不能正确解析请求 body 的数据。
router.post('/base/post', function(req, res) {
    res.json(req.body)
})

router.post('/base/buffer', function (req, res) {
    let msg = []
    req.on('data', (chunk) => {
        if (chunk) {
            msg.push(chunk)
        }
    })
    req.on('end', () => {
        let buf = Buffer.concat(msg)
        res.json(buf.toJSON())
    })
})

app.use(router)