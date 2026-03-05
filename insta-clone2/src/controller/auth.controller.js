const userModel = require("../model/user.model");
const ImageKit = require('@imagekit/nodejs')
const bcrypt = require('bcryptjs')
const {toFile} = require('@imagekit/nodejs')

const jwt = require('jsonwebtoken')

const imageKit= new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATEKEY
})



async function RegisterController(req, res) {

  
  const { username, email, password,bio} = req.body;
  console.log(req.body,req.file,bio);

  let imageBuffer = null;
  let profileUrl = null;

    if (req.file) {
      imageBuffer = req.file.buffer;
    }

  const isUserAlreadyExit = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExit) {
    return res.status(409).json({
      message: "user is already exixts",
    });
  }

  const hash = bcrypt.hashSync(password, 10);

if (req.file) {
      const uploaded = await imageKit.files.upload({
        file: await toFile(req.file.buffer, "file"),
        fileName: req.file.originalname,
      });

      profileUrl = uploaded.url;
    }
  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
   // profile:profileUrl,
  });

  const token = jwt.sign({ id: user._id,
    username:user.username
   }, process.env.JWT_SECRET);

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
    }).select("+password")

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
    id:isUserRegister._id,
    username:isUserRegister.username
 },process.env.JWT_SECRET)

 res.cookie('token',token)

 res.status(200).json({
    username:isUserRegister.username,
    email:isUserRegister.email,
    password:isUserRegister.password
 })
}

async function getMe(req,res){

  
    const userId = req.user.id

    const user = await userModel.findById(userId)
    res.status(200).json({
      user
    })
}

module.exports = {
  RegisterController,
  loginController,
  getMe,
  
};
