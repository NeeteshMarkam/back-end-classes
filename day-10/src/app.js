const express = require('express')
const authRouer =require('../src/routers/auth.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouer)

module.exports =app