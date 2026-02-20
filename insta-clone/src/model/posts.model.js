const mongoose = require("mongoose");
const { schema } = require("./user.model");

const postsSchema = new mongoose.Schema({
  caption: {
    type: String,
   default:''
  },
  imgUrl: {
    type: String,
    required: [true, 'imgUrl is required for creating an post'],
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:[true,'user id is required for creating an post']
  }
 
});


const postModel = mongoose.model('Post',postsSchema)

module.exports = postModel