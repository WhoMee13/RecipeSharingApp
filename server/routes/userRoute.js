const express=require('express')
const router=express.Router()
const auth = require('../middlewares/authenticationMiddleware.js')
const {createUser,deleteUser, updateBio, updatePassword, updateUsername, updateProfilePic,loginUser} = require("../controllers/userController.js")
//* Routing
router.post("/", createUser)
router.post("/login", loginUser)
router.delete("/",auth,deleteUser)
router.put("/bio",auth,updateBio)
router.put("/username",auth,updateUsername)
router.put("/password",auth,updatePassword)
router.put("/profilepic",auth,updateProfilePic)
module.exports=router