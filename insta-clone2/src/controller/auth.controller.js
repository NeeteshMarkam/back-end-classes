const userModel = require("../model/user.model");
const ImageKit = require('@imagekit/nodejs')
const bcrypt = require('bcryptjs')
const {toFile} = require('@imagekit/nodejs')

const jwt = require('jsonwebtoken')

const imageKit= new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})



async function RegisterController(req, res) {

    console.log(req.body,req.file);
    
  const { username, email, password, bio, profile } = req.body;

  const isUserAlreadyExit = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExit) {
    return res.status(409).json({
      message: "user is already exixts",
    });
  }

  const hash = bcrypt.hashSync(password, 10);

  const file = await imageKit.files.upload({
     file:await toFile(Buffer.from(req.file.buffer),'file'),
     fileName:req.file.originalname

  })

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profile:file.url,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

 res.status(200).json({
  username: username,
  email: email,
  token
});
}
 async function loginController(req,res){
    const {username ,email ,password} = req.body


    const isUserRegister = await userModel.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })

    if (!isUserRegister) {
        return res.status(409).json({
            message:'user is not found '
        })
    }


const isPasswordMatch =await bcrypt.compare(password,isUserRegister.password)
 if (!isPasswordMatch) {
    return res.status(401).json({
        message:'password is not valid'
    })
 }

 const token = jwt.sign({
    id:isUserRegister._id
 },process.env.JWT_SECRET)

 res.cookie('token',token)

 res.status(200).json({
    username:isUserRegister.username,
    email:isUserRegister.email,
    password:isUserRegister.password
 })
}

module.exports = {
  RegisterController,
  loginController
};
