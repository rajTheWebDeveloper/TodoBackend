import express from 'express'
import env from 'dotenv'
import connect from './connect.js'
import TodoRoutes from './routes/todo.js'

let app=express()
env.config({
    path:'./config/.env'
});
app.use(express.json())

app.use('/todo',TodoRoutes)

let PORT= process.env.PORT || 8000


let start=async ()=>
{
    await connect()
    app.listen(2000,()=>
    {
        console.log(`Connected to port ${PORT}`)
    })
}


start()