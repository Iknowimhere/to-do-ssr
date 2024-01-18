import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import { dbConnection } from '../config/dbConfig.js';
import taskRouter from '../routes/taskRoutes.js';
import userRouter from '../routes/userRoutes.js';
//app instance
let app=express()
dbConnection()
//register the template engine
app.set("view engine","ejs")


//to process incoming json data
app.use(express.json())

//to process form data
app.use(express.urlencoded({extended:false}))

//to serve static resources
app.use(express.static("public"))

//index route
app.get("/",(req,res)=>{
    res.render("index")
})
//taskrouter on root/base route /api/v1/tasks
app.use("/api/v1/tasks",taskRouter)
app.use("/api/v1/users",userRouter)

export default app;