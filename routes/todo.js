import express from 'express'
import { getTodos } from '../controllers/getTodos.js'
import { createTodo } from '../controllers/createTodo.js'
import { deleteTodo } from '../controllers/deleteTodo.js'
import { updateTodo } from '../controllers/updateTodo.js'
import { editTodo } from '../controllers/editTodo.js'
let router=express.Router()


router.get('/list/fetch',getTodos)
router.post('/list/add',createTodo)
router.put('/list/update/:specific',updateTodo)
router.put("/list/edit/:specific", editTodo);
router.delete('/list/delete/:specific',deleteTodo)


export default router