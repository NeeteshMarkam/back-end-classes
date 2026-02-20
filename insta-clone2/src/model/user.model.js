const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username is already exits'],
        required:[true,'requied username ']
    },
    email:{
        type:String,
        unique:[true,'email is already exits'],
        required:[true,'requied email ']
    },
    password:{
        type:String,
        required:[true,'requied password ']
    },
    bio:{
        type:String
    },
    profile:{
        type:String,
          default:"https://ik.imagekit.io/nwtej6pdi/default-avatar-profile-icon.webp"
    }

})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel