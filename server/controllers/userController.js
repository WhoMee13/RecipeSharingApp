const mongoose=require('mongoose')
const eah = require("express-async-handler")
const User = require('../models/User');
const generateToken=require("../utils/generateToken")

const createUser=eah(async(req,res)=>{
    const {username,email,password}=req.body;
    const createdUser=await User.create({username:username,password:password,email:email}) 
    res.status(200).json({
        success:true,
        message:"User register successfull",
        data:{

            "id":createdUser.id,
            "username":createdUser.username,
            "email":createdUser.email,
            "token":generateToken(createdUser._id)
        }
    })
})
const loginUser=eah(async(req,res)=>{
    const {username,password}=req.body
    const loginUser=await User.findOne({username:username})
    if (loginUser){
        if (await loginUser.isPasswordMatch(password)){
            res.status(200).json({
                success:true,
                "message":"Login Succesfull",
                data:{
                    "token":generateToken(loginUser.id)
                }
            })
        }
        else{
            throw new Error("Password didn't match")
        }
    }
    else{
        throw new Error("Username not found")
    }
})
const deleteUser=eah(async(req,res)=>{
    const id=req.user.id
    const deletedUser=await User.findByIdAndDelete(id)
    res.status(200).json({
        "success":true,
        "message":"User deleted successfully",
        "data":{
            "id":deletedUser.id,
            "username":deletedUser.username,
            "email":deletedUser.email
        }
    })
})
const updateUsername=eah(async(req,res)=>{
 const id=req.user.id
 const {username,password,email,bio}=req.body
 const findUser=await User.findById(id)
 if(!findUser){
    throw new Error("Cannot Find User")
 }
 const updatedUser=await User.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})

})
const updateBio=eah(async(req,res)=>{
    const id=req.user.id
    const {username,password,email,bio}=req.body
    const findUser=await User.findById(id)
    if(!findUser){
       throw new Error("Cannot Find User")
    }
    const updatedUser=await User.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })
const updatePassword=eah(async(req,res)=>{
    const id=req.user.id
    const {username,password,email,bio}=req.body
    const findUser=await User.findById(id)
    if(!findUser){
       throw new Error("Cannot Find User")
    }
    const updatedUser=await User.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })
const updateProfilePic=eah(async(req,res)=>{
    const id=req.user.id
    const {username,password,email,bio}=req.body
    const findUser=await User.findById(id)
    if(!findUser){
       throw new Error("Cannot Find User")
    }
    const updatedUser=await User.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })

module.exports={
    loginUser,
    createUser,
    updateUsername,
    updateBio,
    updatePassword,
    updateProfilePic,
    deleteUser
}