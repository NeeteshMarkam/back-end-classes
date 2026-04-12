const userModel = require("../models/usersModel")

const bcryptjs = require('bcryptjs')

const jwt = require('jsonwebtoken')
async function register(req, res) {

    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }

        const isalreadyExits = await userModel.findOne({
            email: email
        })

        if (isalreadyExits) {

            return res.status(409).json({
                message: "user is already exits"
            })
        }

        const hash = bcryptjs.hashSync(password, 10)

        const user = await userModel.create({
            username,
            email,
            password: hash
        })
        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        res.cookie('token', token)


        res.status(201).json({
            message: 'user is succesfully created',
            id: user._id,
            username: user.username,
            email: user.email
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }


}
async function login(req, res) {
  try {
    console.log(req.body)

    const { email, username, password } = req.body;

    const user = await userModel.findOne({
      $or: [{ email }, { username }]
    }).select('+password')

    if (!user) {
      return res.status(404).json({
        message: 'user not found'
      })
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password)

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "invalid password"
      })
    }

    const token = jwt.sign({
      id: user._id,
      username: user.username
    }, process.env.JWT_SECRET)

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    })

    return res.status(200).json({
      message: 'user is successfully login',
      user: {
        username: user.username,
        email: user.email
      }
    })

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      message: "server error"
    })
  }
}

async function getMe(req, res) {
  try {
    const username = req.user.username

    const details = await userModel.findOne({ username })

    if (!details) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    return res.status(200).json({
      user: details
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Server error"
    })
  }
}


module.exports = {
    register,
    login,
    getMe
}