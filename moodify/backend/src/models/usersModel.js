const mongoose = require('mongoose')


const userSchama = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required for create user"],
    }
    
    ,
    email: {
        type: String,
        unique: [true, 'email is already exits'],
        required: [true, "email is required for create user"],
    }
    ,
    password: {
        type: String,
        required: [true, "username is required for create user"],
        select:false,
    }
    
})

const userModel = mongoose.model('users',userSchama)


module.exports = userModel