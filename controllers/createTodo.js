import express from 'express'
import Todo from '../models/todo.js';

let createTodo=async (req,res)=>
{
    let {task,status}=req.body;
    let createdTask=await Todo.create({task,status})
    return res.send(createdTask)
}


export {createTodo}