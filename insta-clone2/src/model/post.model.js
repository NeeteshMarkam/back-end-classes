const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:[true,'caption is required']
    },
    imgUrl:{
        type:String,
        require:[true,'post is requied for post create']
    },
    user:{
        ref:'users',
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'user id is required for creating an post']
    }

})

const postModel = mongoose.model('posts',postSchema)

module.exports = postModel