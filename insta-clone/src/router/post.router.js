const express = require('express')
const userAuth = express.Router()
const postController = require('../controllers/post.controller')
const multer =require('multer')

const upload = multer({storage:multer.memoryStorage()});




userAuth.post('/',upload.single("image"),postController.postCreatController)



module.exports = userAuth