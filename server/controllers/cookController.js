const mongoose=require('mongoose')
const eah = require("express-async-handler")
const Cook = require('../models/Cook');
const generateToken=require("../utils/generateToken")

const createCook=eah(async(req,res)=>{
    const {username,email,password}=req.body;
    const createdCook=await Cook.create({username:username,password:password,email:email}) 
    res.status(200).json({
        success:true,
        message:"Cook register successfull",
        data:{
            "id":createdCook.id,
            "username":createdCook.username,
            "email":createdCook.email,
            "token":generateToken(createdCook._id)
        }
    })
})
const loginCook=eah(async(req,res)=>{
    const {username,password}=req.body
    const loginCook=await Cook.findOne({username:username})
    if (loginCook){
        if (await loginCook.isPasswordMatch(password)){
            res.status(200).json({
                success:true,
                "message":"Login Succesfull",
                data:{
                    "token":generateToken(loginCook.id)
                }
            })
        }
        else{
            throw new Error("Password didn't match")
        }
    }
    else{
        throw new Error("username not found")
    }
})
const deleteCook=eah(async(req,res)=>{
    const id=req.Cook.id
    const deletedCook=await Cook.findByIdAndDelete(id)
    res.status(200).json({
        "success":true,
        "message":"Cook deleted successfully",
        "data":{
            "id":deletedCook.id,
            "username":deletedCook.username,
            "email":deletedCook.email
        }
    })
})
const updateusername=eah(async(req,res)=>{
 const id=req.Cook.id
 const {username,password,email,bio}=req.body
 const findCook=await Cook.findById(id)
 if(!findCook){
    throw new Error("Cannot Find Cook")
 }
 const updatedCook=await Cook.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})

})
const updateBio=eah(async(req,res)=>{
    const id=req.Cook.id
    const {username,password,email,bio}=req.body
    const findCook=await Cook.findById(id)
    if(!findCook){
       throw new Error("Cannot Find Cook")
    }
    const updatedCook=await Cook.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })
const updatePassword=eah(async(req,res)=>{
    const id=req.Cook.id
    const {username,password,email,bio}=req.body
    const findCook=await Cook.findById(id)
    if(!findCook){
       throw new Error("Cannot Find Cook")
    }
    const updatedCook=await Cook.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })
const updateProfilePic=eah(async(req,res)=>{
    const id=req.Cook.id
    const {username,password,email,bio}=req.body
    const findCook=await Cook.findById(id)
    if(!findCook){
       throw new Error("Cannot Find Cook")
    }
    const updatedCook=await Cook.findByIdAndUpdate(id,{username:username,password:password,email:email,bio:bio})
   
   })

module.exports={
    loginCook,
    createCook,
    updateusername,
    updateBio,
    updatePassword,
    updateProfilePic,
    deleteCook
}