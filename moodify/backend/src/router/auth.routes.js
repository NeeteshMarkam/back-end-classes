const express = require('express')
const authRouter= express.Router()
const authControllers  = require('../controller/auth.controller')

const AuthMiddleware = require('../middlewares/auth.middleware')

authRouter.post('/register',authControllers.register)


authRouter.post('/login',authControllers.login)

authRouter.get('/get-me',AuthMiddleware.authUser,authControllers.getMe)


module.exports = authRouter