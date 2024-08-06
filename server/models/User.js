const mongoose=require('mongoose')
const bcrypt = require('bcrypt')
const userSchema=mongoose.Schema({
    "username":{
        type:String,
        required:[true,"Username is required"],
        unique:true
    },
    "password":{
        type:String,
        required:[true,"Password is required"]
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "bio":{
        type:String
    },
    "profilePic":{
        type:String
    },
    "shoppingList":[
        {
            type:String
        }
    ],
    "planner":[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Recipe'
        }
    ],
    "createdAt":{
        type:Date,
        default:Date.now
    }
})
userSchema.pre('save',async function(next){
    if (!this.isModified('password')) {
        return next();
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})
userSchema.methods.isPasswordMatch=async function(enteredPass){
    return await bcrypt.compare(enteredPass,this.password)
}
module.exports=mongoose.model("User",userSchema)