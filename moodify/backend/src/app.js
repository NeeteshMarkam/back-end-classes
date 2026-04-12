require('dotenv').config()
const express = require('express')
const cookiesParser = require('cookie-parser')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cookiesParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


const authRouter = require('./router/auth.routes')
const songRouter = require('./router/song.routes')

app.use('/api/auth',authRouter)
app.use('/api/song',songRouter)


module.exports = app