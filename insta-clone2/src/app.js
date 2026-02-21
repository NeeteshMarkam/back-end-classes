require('dotenv').config()
const express = require('express')
const app = express()

const cookiesParser = require('cookie-parser')


const authRouter = require('../src/router/auth.router')
const postRouter = require('./router/post.router')
const userRouter = require('./router/follow.router')

app.use(express.json())
app.use(cookiesParser())

app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/user',userRouter)
module.exports =app