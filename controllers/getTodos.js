import express from 'express'
import Todo from '../models/todo.js'

let getTodos=async (req,res)=>
{
    let allTodos=await Todo.find({})
    return res.send({success:true,data:allTodos})
}



export {getTodos}