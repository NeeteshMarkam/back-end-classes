const express = require('express')
const userModel = require('./model/user.model')

const cors = require('cors')
 const app = express()
app.use(cors())
app.use(express.json())


app.post('/users',async(req,res)=>{
    const {name,email,password} = req.body
   const newUser = await userModel.create({
        name,email,password
    })
    res.status(201).json({
        message:"new user is created",
        newUser
    })
})

app.get('/users/data',async(req,res)=>{
    const users = await userModel.find()
    res.status(200).json({
        message:"users all data",
        users
    })
})

app.delete('/users/:id',async(req,res)=>{
    const id = req.params.id
  await userModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"user deleted successfully"
    })
})

app.patch('/users/update/:id',async(req,res)=>{
    const id= req.params.id
    const {password} = req.body
     await userModel.findByIdAndUpdate(id,{password})

     res.status(200).json({
        message :"user updated successfully"
     })
})

module.exports = app