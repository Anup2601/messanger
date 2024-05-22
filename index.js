const express=require("express");//to install express
const app=express();
const mongoose=require("mongoose");//to install mongoose
const path=require("path");//to making path
const chat=require("./models/chat.js");//to require chat module
const methrdOverride=require("method-override");

app.use(methrdOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
// to use ejs 
const { render } = require("ejs");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
// to connect with mongoose 
main()
.then(()=>{
    console.log("connection sucessful");
}).catch((error)=>{
    console.log(error)});
async function  main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/messanger');
    }
// to make root router 
app.get("/",(req,res)=>{
    res.send("root is working");
});
// to make chat router 
app.get("/chat",async(req,res)=>{
    let chats=await chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});
// to make a new router 
app.get("/chat/new",(req,res)=>{
    res.render("new.ejs");
});
// to make post chat Router
app.post("/chat",(req,res)=>{
    let {from,to,message}=req.body;
    let newchat=new chat({
        from:from,
        to:to,
        message:message,
        time:new Date()
    });
    //  to save new chat 
    newchat.save()
    .then((res)=>{
        console.log("Chat was saved");
    }).catch((error)=>{
        console.log(error);
    });
    res.redirect("/chat");
})
// to make edit router 
app.get("/chat/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat2= await chat.findById(id);
    res.render("edit.ejs",{chat2});
})

// to make update router 
app.put("/chat/:id",async (req,res )=>{
    let {id}=req.params;
    let {message: newmsg}=req.body;
    // console.log(newmsg);
    let updatedchat=await chat.findByIdAndUpdate(id,
        {message: newmsg},
        {runValidators: true, new: true}
    );
    console.log(updatedchat);
    res.redirect("/chat");
})

// destory route
app.delete("/chat/:id", async (req,res)=>{
    let {id}=req.params;
    let deletedchat= await chat.findByIdAndDelete(id);
    res.redirect("/chat");
});
// to make port 
app.listen(8080,()=>{
    console.log("server is listion to port 8080");
});
// to insert chat 
let chat1= new chat({
    from:"neha",
    to:"priya",
    message:"hello priya",
    time:new Date()
});
chat1.save();// to save chat