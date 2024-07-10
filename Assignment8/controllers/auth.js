import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from '../modals/user.js'
import nodemailer from "nodemailer";

async function signup(req,res){
    try{
        const{name,email,password,gender}=req.body;

        //check password length
        if(password.length< 8){
            return res.status(400).json({sucess: false,message: "password should be minimum 8"})
        }

        //check already existing email
        //find single doc
        const alreadyExistingUser = await User.findOne({email})
        if(alreadyExistingUser !=null){
            return res.status(400).json({sucess: false,message: "Email already in use"})

        }
        //hash passwords
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({name,email,password: hashedPassword,gender});
        await newUser.save()

        //Email verification
        let token = jwt.sign({_id:newUser._id},"process.env.JWT_SECRET")

        //send token to user email
        const url =`http://localhost:3001/auth/verify-account/${token}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
            }
          });
          transporter.sendMail({
            from: "rabianuzha@gmail.com",
            to: email,
            subject: "verify your account",
            html: 
            `
            <h1>Dear ${name}, Thanks for signing up with us</h1>
            <p>Click on the below link to verify your email</p>
            <a href=${url}>Click here</a>
            `
          })
        return res.status(200).json({sucess: true,message: "Account created"})
    }
    catch(err){
        console.log("Error",err);
        return res.status(500).json({success: false,message: err})
    }
}
async function login(req,res){
    try{
        const {email,password}= req.body;

        const user =await User.findOne({email});
        if(user == null){
            return res.status(400).json({sucess: false,message:"Invalid email"})

        }

        //check if email is verified or not
        if(user.emailVerified == false){
            return res.status(401).json({sucess: false,message:"your email is not activated"})

        }
        const match = await bcrypt.compare(password,user.password)
        if(match){
            const token = jwt.sign({_id: user._id},"process.env.JWT_SECRET");
            return res.status(200).json({sucess: true,message: "Login success",token: token})
        }else{
            return res.status(400).json({sucess: false,message:"Invalid Password"})

        }
    }
    catch(err){
        return res.status(500).json({sucess: false,message:err})
    }
}
async function verifyEmail(req,res){
    try {
        const token = req.params.token;
        var decoded = jwt.verify(token, 'process.env.JWT_SECRET');
        await User.findByIdAndUpdate(decoded._id,{emailVerified: true})
        return res.status(200).json({success: true, message: "your email is verified"})
        console.log(decoded)
      } catch(err) {
        return res.status(400).json({success: false, message: "Invalid Link"})
      }
    
}
async function getAllUsers(req,res){

    //check if you are authorised or not
    try{
        const accessToken = req.headers.authorization;
        var decoded = jwt.verify(accessToken, "process.env.JWT_SECRET")
       let data = await User.find()
       return res.status(200).json({success: true,users: data})

    }
    catch(err){
        return res.status(401).json({sucess: false,message:err})
    }
}

export{signup,login,verifyEmail,getAllUsers};