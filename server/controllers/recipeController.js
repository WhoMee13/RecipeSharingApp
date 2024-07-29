const mongoose=require('mongoose')
const User=require("../models/User")
const Cook=require("../models/Cook")
const Recipe=require("../models/Recipe")

const eah=require('express-async-handler')
const createRecipe=eah(async(req,res)=>{
    console.log("entered create recipe route");
    console.log(req.user)
    if(req.user.role === "cook"){
        const {title,ingredients,instructions,category}=req.body
        // const recipe=await 
        const newRecipe=await Recipe.create({
            title:title,
            ingredients:ingredients,
            category:category,
            instructions:instructions,
            image:req.body.image || "https://saturdaykitchenrecipes.com/wp-content/uploads/2020/04/default-recipe-image.gif",
            creator:req.user.id
        })
        const cook = await Cook.findById(req.user.id)
        cook.myRecipes.push(newRecipe._id)
        await cook.save()
        return res.status(201).json({success:true,message:"Recipe created successfully",data:newRecipe})
    }
    return res.status(401).json({success:false,message:"You are not authorized to create a recipe"})

})
const updateRecipe = eah(async(req,res)=>{
    if(req.user.role === "cook"){
        const updatedUser = await Recipe.findByIdAndUpdate(req.user.id, {
            title:req.body.title,
            ingredients:req.body.ingredients,
            category:req.body.category,
            instructions:req.body.instructions,
            image:req.body.image,
        })
    }   
    return res.status(401).json({success:false,message:"You are not authorized to create a recipe"})
})
const findRecipeByTitle = eah(async(req,res)=>{
    const title = req.params.title
    const findRecipe = await Recipe.find({title:title})
    if(findRecipe){
        return res.status(200).json({success:true,message:"Recipe found",data:findRecipe})
    }
    return res.status(404).json({success:false,message:"Recipe not found"})
})
const findRecipeByCategory = eah(async(req,res)=>{
    const category = req.params.category.split(",")
    const findRecipe = await Recipe.find({category:{$in: category}})
    if(findRecipe){
        return res.status(200).json({success:true,message:"Recipe found",data:findRecipe})
    }
    return res.status(404).json({success:false,message:"Recipe not found"})
})
const deleteRecipe = eah(async(req,res)=>{
    if(req.user.id === "cook"){
        const recipeTitle = req.params.title
        const recipe = await Recipe.findOne(recipeTitle)
        if(recipe){
            const deleteRecipe = await Recipe.findOneAndDelete({title:recipeTitle})
            if(deleteRecipe){
                return res.status(200).json({success:true,message:"Recipe deleted successfully",data:deleteRecipe})
            }
            throw new Error("Recipe cannot be deleted")
        }
        else{
            return res.status(404).json({success:false,message:"Recipe not found"})
        }
    }
    return res.status(401).json({success:false,message:"You are not authorized to delete a recipe"})
})



module.exports={
    createRecipe,
    findRecipeByTitle,
    findRecipeByCategory,
    deleteRecipe,

}