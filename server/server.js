const path = require('path')
const express = require('express')
const shoppingRoutes = require('./routes/shopping')
const redditRoutes = require('./reddit')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/v1/items', shoppingRoutes)
server.use('/api/v1/reddit', redditRoutes)

module.exports = server
