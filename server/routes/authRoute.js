const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Cook = require("../models/Cook")
const User = require("../models/User")
const auth = require("../middlewares/authenticationMiddleware")

router.post("/",auth,async(req,res)=>{
    const valueIfCook = await Cook.findOne({username:req.body.username,email:req.body.email})
    if(valueIfCook && valueIfCook.id===req.user.id && req.user.role === req.body.role){
        return res.json({success:true})
    }
    const valueIfUser = await User.findOne({username:req.body.username,email:req.body.email})
    if(valueIfUser && valueIfUser.id===req.user.id && req.user.role === req.body.role){

        return res.json({success:true})
    }

    return res.json({success:false})
})
module.exports=router