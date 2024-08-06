const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const cookSchema=mongoose.Schema({
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
    "myRecipes":[
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
cookSchema.pre('save',async function(){
    if (!this.isModified('password')) {
        return next();
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
})
cookSchema.methods.isPasswordMatch=async(enteredPass)=>{
    return await bcrypt.compare(enteredPass,this.password)
}
module.exports=mongoose.model("Cook",cookSchema)