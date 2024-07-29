const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
require("./config/dbconnect.js")()
const ERROR=require("./middlewares/errorHandlerMiddleware.js")
app.use(express.json())
// Routes
app.use(
    "/api/user",
    require("./routes/userRoute")
)
app.use(
    "/api/recipe",
    require("./routes/recipeRoute.js")
)
app.use(
    "/api/cook",
    require("./routes/cookRoute.js")
)
//* Middlewares
app.use(ERROR.errorHandleMiddleware)
// Server
const PORT =process.env.PORT || 3000
app.listen(
    PORT,
    ()=>{
        console.log(`Server is running at ${PORT}`);
    }
)