const mongoose=require("mongoose");//to import mongoose 
//to make chat schema
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    message:{
        type:String,
        maxLength:100
    },
    time:{
        type:Date,
        require:true
    }
})
const chat=mongoose.model("chat",chatSchema);
module.exports=chat;