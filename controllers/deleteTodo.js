import express from 'express'
import Todo from '../models/todo.js';


let deleteTodo=async (req,res)=>
{
    let {specific}=req.params;
    // console.log(req.params)
    console.log("Gochy",specific)
    try 
    {
        console.log("Us indian or come to our casino ")
        let deleted=await Todo.findByIdAndDelete({_id:specific})
        return res.send({success:true,data:deleted})
    }
    catch(e)
    {
        console.log(e)
    }
    return res.send("Easy Peasy Oh So Breezy")
}



export {deleteTodo}