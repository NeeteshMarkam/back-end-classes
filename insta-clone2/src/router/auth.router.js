const express = require('express');
const authRouter = express.Router()
const authController = require('../controller/auth.controller')
const multer = require('multer')

const upload = multer({storage:multer.memoryStorage()})



authRouter.post('/register',upload.single('profile'),authController.RegisterController)

authRouter.post('/login',authController.loginController)

module.exports = authRouter