const express=require('express')
const router=express.Router()
//TODO controller fetch
const {
    loginCook,
    createCook,
    updateusername,
    updateBio,
    updatePassword,
    updateProfilePic,
    deleteCook
}=require("../controllers/cookController.js")
const auth = require('../middlewares/authenticationMiddleware.js')

router.post("/",createCook)
router.post("/login",loginCook)
router.delete("/",auth,deleteCook)

module.exports=router