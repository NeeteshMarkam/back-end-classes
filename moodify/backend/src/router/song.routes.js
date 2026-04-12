const express = require('express')
const upload = require('../middlewares/upload.middleware')
const songController = require('../controller/song..controller')

const router = express.Router()

/***
 * POST /api/song/
*/
router.post('/',upload.single('song'),songController.uploadSong)


module.exports =router