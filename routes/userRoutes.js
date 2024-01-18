import express from 'express'
import { registerUser,loginUser, getRegisterForm } from '../controllers/userControllers.js'

let userRouter=express.Router()

userRouter.get("/register",getRegisterForm)
userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;