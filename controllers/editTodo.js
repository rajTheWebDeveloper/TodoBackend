import express from 'express'
import Todo from '../models/todo.js';


let editTodo=async (req,res)=>
{
    let {specific}=req.params;
    let {_id,task,status}=req.body
    try 
    {
        let edited=await Todo.findByIdAndUpdate({_id:specific},{_id,task,status},{new:true})
        console.log(edited)
        return res.send({success:true,data:edited})
    }
    catch(e)
    {
        console.log(e)
    }
}


export {editTodo}