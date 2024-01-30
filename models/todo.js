import mongoose from "mongoose";

let todoSchema=new Schema({
    task:{
        type:String
    },
    status:{
        type:Boolean
    }
})




export default mongoose.model('Todo',todoSchema)