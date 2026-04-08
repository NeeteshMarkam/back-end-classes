const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken')

const crypto = require('crypto')

const authRouter = express.Router()


authRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;


const isUserAladyExits = await userModel.findOne({ email })

    if (isUserAladyExits) {
        return res.status(409).json({
            message: "user already exits"
        })
    }

    const hash = crypto.createHash('md5').update(password).digest('hex')
    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie('token', token)
    res.status(201).json({
        message: "user register succesfully",
        users: {
            username: user.username,
            email: user.email},
        token
    })
})


// there something error i don't know why req.cookies.token not working
authRouter.get("/log", async (req, res)=>{
    const token = req.cookies?.token;

if (!token) {
  return res.status(401).json({ message: "Token missing" });
}

    console.log(token);
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

    console.log(decoded);

    const user= await userModel.findById(decoded.id)
    res.json({
        name:user.username,
        email:user.email,
    })

})



authRouter.post('/login',async(req,res)=>{
    const {email,password}= req.body;

    const user =await userModel.findOne({email})

    if (!user) {
        return res.status(404).json({
            message:'user not found'
        })
    }

    const hash  = crypto.createHash('md5').update(password).digest('hex')
 const ispasswordvalid = hash ===user.password
    
    if(!ispasswordvalid){
        return res.status(401).json({
            message:"Invaild creedentials"
        })
    }

    const token = jwt.sign({
        id:user.id,
    },process.env.JWT_SECRET)


    res.cookie('jwt_token',token)

    res.json({
        message:"user logged in succesfully",
        user:{
            name:user.username,
            email:user.email,
        }

    })

})


module.exports = authRouter