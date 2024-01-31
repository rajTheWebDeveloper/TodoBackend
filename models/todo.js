import mongoose from "mongoose";

let todoSchema=new mongoose.Schema({
    task:{
        type:String
    },
    status:{
        type:Boolean
    }
})



export default mongoose.model('Todo',todoSchema)