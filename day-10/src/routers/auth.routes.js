const express = require("express");
const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken')
const authRouter = express.Router();
const crypto = require('crypto')

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user aleary exists with this email user",
    });
  }

  const hash = crypto.createHash('md5').update(password).digest('hex')

  const user = await userModel.create({
    username,
    email,
    password:hash,
  });
  const token = jwt.sign({
    id:user._id,
    email:user.email
},
    process.env.JWT_SECRET)
res.cookie('jwt_token',token) 


  res.status(201).json({
    message: "user is created",
    user,
    token
  });
});

authRouter.post('/protected',(req,res)=>{
  console.log(req.cookies)
  res.status(200).json({
    message:"this protecte router"
  })
   
})

authRouter.post('/login',async(req,res)=>{

  const {email,password}= req.body

  const user =await userModel.findOne({email})
  if (!user) {
    return res.status(404).json({
      message:"user not found with this email address"
    })
  }
  const isPasswordMatch = user.password===crypto.createHash('md5').update(password).digest('hex')
  if (!isPasswordMatch) {
    return res.status(401).json({
      message:"Invaild password"
    })
  }
  const token = jwt.sign({
    id:user._id,
  },process.env.JWT_SECRET)
  res.cookie('jwt_token',token)
  res.status(200).json({
    message:"user logged in",
    user
  })

})
module.exports = authRouter;
