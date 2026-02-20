const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'user alrdy exit with username'],
        required:[true,'user name is required']
    },email:{
        type:String,
        unique:[true,'user alrdy exit with email'],
       required:[true,'user name is required']
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
    },
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/nwtej6pdi/default-avatar-profile-icon.webp"
    }
})

const userModel = mongoose.model('users',userSchema)

module.exports= userModel