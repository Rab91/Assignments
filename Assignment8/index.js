import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";

//add the environment variables
dotenv.config();

//import all the routes
import authRoutes from "./routes/auth.js"

//creating server
const app = express();

//add middleware
app.use(express.json())
app.use("/auth",authRoutes)
//connect to db
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("Db connected")
    app.listen(3001,()=>console.log("server running on 3001"))
})
.catch((err)=>console.log("unable to connect db", err))
