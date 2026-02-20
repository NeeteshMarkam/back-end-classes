const userModel = require('../model/user.model')
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require('bcryptjs')

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const isUserAlreadyExit = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExit) {
    return res.status(409).json({
      message:
        "user alrdy exit with this email" +
        (isUserAlreadyExit.email == email
          ? "Email already exixts"
          : "Username already exits"),
    });
  }

  const hash = await bcrypt.hash(password,10)
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user is registered",
    user,
    token,
  });
}

async function getMeController(req,res){
    const token = req.cookies.jwt_token

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded);
    
    const users = await userModel.findById(decoded.id)
    console.log(users);
    res.status(200).json({
        email:users.email,
        name:users.username,
    })
    
}

async function loginController(req,res){
    const {username,email,password} = req.body

    const userFind = await userModel.findOne({
        $or:[
            {
username:username
            },
            {
email:email
            }
        ]
    }) 
    if (!userFind) {
        return res.status(500).json({
            message:"user not found you need to register"
        })
    }

    const  isPasswordMatch = await bcrypt.compare(password,userFind.password)

    if (!isPasswordMatch) {
        return res.status(409).json({
            message:"invalid credenceali"
        })
    }

    const token = jwt.sign({
        id:userFind._id
    },process.env.JWT_SECRET)

    res.cookie('jwt_token',token)

    res.status(200).json({
        message:"user is logged"
        ,
        userEmail:userFind.email,
        userpassword:userFind.password
    })
}

module.exports = {
    registerController,
    getMeController,
    loginController
}