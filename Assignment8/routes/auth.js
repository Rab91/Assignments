import express from "express"
//import controllers
import {login,signup,verifyEmail,getAllUsers} from "../controllers/auth.js"

//import middlewares 
import { isLoggedIn } from "../middlewares/auth.js";

//Auth routes
const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.get("/users",isLoggedIn,getAllUsers)

router.get("/verify-account/:token",verifyEmail)

export default router;