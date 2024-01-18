import Task from "../models/Task.js"

//@desc   create task 
//@path   /api/v1/tasks
//@access Public

export const postTask=async (req,res)=>{
    try {
        const newTask=await Task.create({
            task:req.body.task
        })
        res.status(201).json({
            status:"Success",
            message:"task created successfully",
            newTask
        })  
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

//@desc   get tasks
//@path   /api/v1/tasks
//@access Public


export const getTasks=async (req,res)=>{
    try {
        const tasks=await Task.find()
    res.status(200).json({
        status:"Success",
        message:"tasks fetched successfully",
        tasks
    }) 
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    } 
}

//@desc   get task
//@path   /api/v1/tasks/:id
//@access Public

export const getTask=async (req,res)=>{
   try {
    const task=await Task.findById(req.params.id)
    res.status(200).json({
        status:"Success",
        message:"task fetched successfully",
        task
    })
   } catch (error) {
    res.status(400).json({
        status:"fail",
        message:error.message
    })
   }  
}

//@desc   update task
//@path   /api/v1/tasks/:id
//@access Public

export const updateTask=async (req,res)=>{
    try {
        const task=await Task.findByIdAndUpdate(req.params.id,{task:req.body.task},{new:true})
    res.status(200).json({
        status:"Success",
        message:"task updated successfully",
        task
    })  
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

//@desc   delete task
//@path   /api/v1/tasks/:id
//@access Public

export const deleteTask=async (req,res)=>{
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status:"Success",
        message:"task deleted successfully",
    })
  } catch (error) {
    res.status(400).json({
        status:"fail",
        message:error.message
    })
  }  
}