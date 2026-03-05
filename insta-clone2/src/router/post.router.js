const express = require('express')
const postRouter = express.Router()
const multer = require('multer')

const postController = require('../controller/post.controller')
const idetifyuser = require('../middlewares/auth.middleware')
const upload = multer({storage:multer.memoryStorage()})

postRouter.post('/',upload.single('post') ,idetifyuser,postController.postCreated)

postRouter.get('/getme',idetifyuser,postController.getmePost)


postRouter.get('/getDetail/:id',idetifyuser,postController.getPostDetailes)

postRouter.post('/like/:postId',idetifyuser,postController.postLike)

postRouter.get('/feed',idetifyuser,postController.feed)
module.exports= postRouter