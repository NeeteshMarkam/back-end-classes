
const postModel = require("../model/post.model")
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')

const imageKit= new ImageKit({
    
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})

async function postCreated(req,res) {
    console.log(req.body,req.file);
   
    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:req.file.originalname
    })


    const post = await postModel.create({
        caption:req.body.caption,
        imgUrl:file.url,
        user:req.user.id
    })

    res.status(201).json({
        message:'post is created',
        post
    })
    
}

async function getmePost(req,res) {

    const userId =req.user.id

    const post = await postModel.find({
        user:userId
      
    })
    
    res.status(200).json({
        message:'all posts',
        post
    })
}

async function getPostDetailes(req,res){

    const userId = req.user.id
    const postId = req.params.id
const post = await postModel.findById(postId)

if (!post) {
    return res.status(404).json({
        message:'post not found'
    })
}

const isvaliduser = post.user.toString() === userId

if (!isvaliduser) {
    return res.status(403).json({
        message:'forbidden content.'
    })
}

res.status(200).json({
    message:'post detailes',
    post
})
}
module.exports = {
    postCreated,
    getmePost,
    getPostDetailes
}
