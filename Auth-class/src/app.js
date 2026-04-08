const express = require('express')
const app = express()
const authRouter = require('./router/auth.router')

const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRouter);
module.exports = app 