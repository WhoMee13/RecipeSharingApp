const express = require("express")
const router=express.Router()
const auth = require("../middlewares/authenticationMiddleware")
const {
    createRecipe,
    findRecipeByTitle,
    findRecipeByCategory,
    deleteRecipe,
    addReviewAndRatings,
    updateRecipe

} = require("../controllers/recipeController")
router.post("/",auth,createRecipe)
router.delete("/",auth,deleteRecipe)
router.get("/readbytitle/:title",auth,findRecipeByTitle)
router.get("/readbycategory/:category",auth,findRecipeByCategory)
router.put("/:title",auth,updateRecipe)
router.put("/reviewsandratings/:title",auth,addReviewAndRatings)
module.exports=router