const express = require('express')
const app = express()
const cookiesParse = require('cookie-parser')
const authRouter = require('./router/auth.router')
const userAuth = require('./router/post.router')

app.use(express.json())
app.use(cookiesParse())
app.use('/api/auth',authRouter)
app.use('/api/post',userAuth)
module.exports =app