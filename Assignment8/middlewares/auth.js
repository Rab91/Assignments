import jwt from "jsonwebtoken";

function isLoggedIn(req,res,next){
    try{
        const accessToken = req.headers.authorization;
        var decoded = jwt.verify(accessToken, "process.env.JWT_SECRET")
        //call the controller
        next();
    }
    
    catch(err){
        return res.status(401).json({sucess: false, message: "Invalid Token"})
    }
}
export {isLoggedIn};
    