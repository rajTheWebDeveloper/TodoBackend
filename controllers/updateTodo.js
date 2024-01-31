import express from 'express'
import Todo from '../models/todo.js'



let updateTodo=async (req,res)=>
{
    let {specific}=req.params;
    let {status,task,_id}=req.body;
    console.log(status,task)
    let updated=await Todo.findByIdAndUpdate({_id:specific},{_id,status:!status,task:task},{new:true})
    return res.send(updated)
}


export {updateTodo}