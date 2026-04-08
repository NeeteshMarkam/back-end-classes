const mongoose = require('mongoose')

const userSchama = new mongoose.Schema({
username:String,
email:{
    type:String,
    unique:[true,'with this email user account already exists']
},
password:String
})

const userModel = mongoose.model('Users',userSchama)

module.exports =userModel