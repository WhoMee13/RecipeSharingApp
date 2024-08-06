const mongoose=require('mongoose')
const recipeSchema=mongoose.Schema({
    //todo title,ingredients,instructions,reviews,ratings,catagories,image
    title:{type:String,required:true},
    ingredients:[{
        type:String
    }],
    category:[{
        type:String
    }],
    instructions:[{type:String}],
    reviewsAndRatings:[{
        type:Object
    }],
    image:{
        type:String
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cook'
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Recipe',recipeSchema)