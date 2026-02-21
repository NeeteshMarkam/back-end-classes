const express  = require('express')
const idetifyuser = require('../middlewares/auth.middleware')
const userFollowController = require('../controller/userFollow.controller')
const userRouter = express.Router()

userRouter.post('/follow/:username',idetifyuser,userFollowController.followUserController)
userRouter.post('/unfollow/:username',idetifyuser,userFollowController.unfollowUserController)

module.exports= userRouter