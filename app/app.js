import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import { dbConnection } from '../config/dbConfig.js';
import taskRouter from '../routes/taskRoutes.js';
import cookieParser from 'cookie-parser';
import userRouter from '../routes/userRoutes.js';
//app instance
let app=express()
// dbConnection()
// //register the template engine
// app.set("view engine","ejs")


// //to process incoming json data
// app.use(express.json())

// //to process form data
// app.use(express.urlencoded({extended:false}))

// //to serve static resources
// app.use(express.static("public"))

// //index route
// app.get("/",(req,res)=>{
//     res.render("index")
// })
// //taskrouter on root/base route /api/v1/tasks
// app.use("/api/v1/tasks",taskRouter)
// app.use("/api/v1/users",userRouter)

app.use(cookieParser('umashankar'))

app.get("/set-cookie",(req,res)=>{
    res.cookie("name","umashankar",{
        maxAge:5*60*1000,
        httpOnly:true,
    })
    res.send("cookie set")
})

app.get("/get-cookie",(req,res)=>{
    res.send(req.cookies.name)
})

app.get("/update-cookie",(req,res)=>{
    res.cookie("name","shankar",{
        maxAge:5*60*1000,
        httpOnly:true
    })
    res.send("cookie updated")
})

// app.get("/delete-cookie",(req,res)=>{
//     res.cookie("name","",{
//         maxAge:1,
//         httpOnly:true
//     })
//     res.send("cookie deleted")
// })


app.get("/delete-cookie",(req,res)=>{
    res.clearCookie("name")
    res.send("cookie deleted")
})
export default app;