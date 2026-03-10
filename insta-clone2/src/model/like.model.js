const mongoose = require('mongoose')


const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required:[true,'post is is require to create post'],

    },
    user:{
        type:String,

required:[true,'username is required']
    },
},
{
    timestamps:true
}
)

likeSchema.index({post:1,user:1},{unique:true})

const likeModel = mongoose.model('likes',likeSchema)

module.exports = likeModel