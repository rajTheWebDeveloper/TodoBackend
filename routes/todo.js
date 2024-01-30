import express from 'express'
import { getTodos } from '../controllers/getTodos.js'
let router=express.Router()


router.get('/list',getTodos)



export default router