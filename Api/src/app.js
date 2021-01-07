const express = require('express')

const app = express()

const index = require('./routes')

app.use(index)

module.exports = app