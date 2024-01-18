import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { genToken } from '../utils/genToken.js'

// @desc    Register the User
// @path    /api/v1/users/register
// @access  Public
export const registerUser=async (req,res)=>{
    try {
       //check for existingUser
    const existingUser=await User.findOne({email:req.body.email})
    if(existingUser){
        return res.json({
            message:"user exits already please try logging in"
        })
    }
    //create user
    const newUser=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    })
    let token=await genToken(newUser._id);
    res.status(201).json({
        status:"success",
        messsage:"user registered successfuly",
        token,
        newUser
    }) 
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}


// @desc    Login the User
// @path    /api/v1/users/login
// @access  Public

export const loginUser=async(req,res)=>{
   try {
     //check for existing user
     const existingUser=await User.findOne({email:req.body.email})
     //verify for the password and genrating token
     if(!existingUser || !(await existingUser.verifyPassword(req.body.password,existingUser.password))){
         return res.json({
             message:"user name and password do not match"
         })
     }
     let token=await genToken(existingUser._id);
     res.status(201).json({
         status:"success",
         messsage:"user logged in successfuly",
         token,
         existingUser
     })
   } catch (error) {
    res.status(400).json({
        status:"fail",
        message:error.message
    })
   }
}

// @desc    Get register Form
// @path    /api/v1/users/register
// @access  Public

export const getRegisterForm=(req,res)=>{
    res.render("register")
}