const postModel = require('../model/posts.model')

const ImageKit = require('@imagekit/nodejs')

const {toFile} = require('@imagekit/nodejs')

const jwt = require('jsonwebtoken')

const imageKit= new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})

async function postCreatController(req,res) {
 console.log(req.body,req.file);

 const token = req.cookies.jwt_token;

 if (!token) {
    
    return res.status(409).json({
        message:'user is not login'
    })
 }
 
 let decoded = null
 try {
     
    decoded = jwt.verify(token,process.env.JWT_SECRET)
    
 } catch (error) {
   return res.status(401).json({
        message:"user not authorized"
    })
    
 }

  const file = await imageKit.files.upload({
     file:await toFile(Buffer.from(req.file.buffer),'file'),
     fileName:req.file.originalname

  })
  
  const post = await postModel.create({
      caption:req.body.caption,
      imgUrl:file.url,
      userid:decoded.id
    })
    res.status(201).json({
        message :'post is created',
        post
    })
 
    
}

module.exports = {
    postCreatController
}