require('dotenv').config()
const express = require('express')
const app = express()

const authRouter = require('../src/router/auth.router')
const cookiesParser = require('cookie-parser')
const postRouter = require('./router/post.router')

app.use(express.json())
app.use(cookiesParser())

app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
module.exports =app