const express = require('express');
const authRouter = express.Router()
const authController = require('../controller/auth.controller')
const multer = require('multer');
const idetifyuser = require('../middlewares/auth.middleware');

const upload = multer({storage:multer.memoryStorage()})



authRouter.post('/register',upload.single('profile'),authController.RegisterController)

authRouter.post('/login',authController.loginController)

authRouter.get('/get-me',idetifyuser,authController.getMe)

module.exports = authRouter