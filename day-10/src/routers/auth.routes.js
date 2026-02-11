const express = require("express");
const userModel = require("../model/user.model");
const jwt = require('jsonwebtoken')
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user aleary exists with this email user",
    });
  }
  const user = await userModel.create({
    username,
    email,
    password,
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

module.exports = authRouter;
