require('dotenv').config()
const express = require('express')
const app = express()
const cookiesParser = require('cookie-parser')

const authRouter = require('./router/auth.router')



app.use(express.json())
app.use(cookiesParser())

app.use('/api/auth',authRouter)



module.exports = app