const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const startServer = require('polyserve/lib/start_server.js')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const polyserveApp = startServer.getApp({
  moduleResolution: 'node',
  npm: true
})
app.use(polyserveApp)

// app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', (req, res) => {
  res.send('respond with a resource')
})

module.exports = app
