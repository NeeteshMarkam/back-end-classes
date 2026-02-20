const express = require("express");
const authRouter = express.Router();

const authControllers = require('../controllers/auth.controller')

authRouter.post("/register",authControllers.registerController );

authRouter.get('/get-me',authControllers.getMeController);


authRouter.post('/login',authControllers.loginController)

module.exports = authRouter;
