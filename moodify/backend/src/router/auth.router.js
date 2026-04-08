const express = require('express')
const authRouter= express.Router()
const authControllers  = require('../controller/auth.controller')

authRouter.post('/register',authControllers.register)


authRouter.post('/login',authControllers.login)

module.exports = authRouter