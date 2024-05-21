// to connect with mongoose 
const mongoose=require("mongoose");
const chat=require("./models/chat.js");
main()
.then(()=>{
    console.log("connection sucessful");
}).catch((error)=>{
    console.log(error)});

async function  main(){
        await mongoose.connect('mongodb://127.0.0.1:27017/messanger');
    }
let chats=[
    {
        from:"neha",
        to:"aastha",
        message:"send me the notes",
        time:new Date()
    },
    {
        from: "alex",
        to: "sara",
        message: "Hey Sara, can you help me with the project details?",
        time: new Date()
    },
    {
        from: "emma",
        to: "mike",
        message: "Mike, do you have any updates on the budget report?",
        time: new Date()
    },
    {
        from: "chris",
        to: "jessica",
        message: "Jessica, could you please send me the meeting agenda?",
        time: new Date()
    },
    {
        from: "sam",
        to: "lily",
        message: "Hi Lily, can you confirm the time for tomorrow's meeting?",
        time: new Date()
    },
    {
        from: "daniel",
        to: "sophie",
        message: "Sophie, I need your feedback on the new website design.",
        time: new Date()
    },
    {
        from: "jason",
        to: "olivia",
        message: "Olivia, could you please proofread the document?",
        time: new Date()
    },
    {
        from: "ryan",
        to: "laura",
        message: "Laura, are you available for a quick call this afternoon?",
        time: new Date()
    },
    {
        from: "matt",
        to: "hannah",
        message: "Hey Hannah, can you share your thoughts on the marketing strategy?",
        time: new Date()
    },
    {
        from: "kevin",
        to: "natalie",
        message: "Natalie, could you please update the project timeline?",
        time: new Date()
    },
    {
        from: "ben",
        to: "lisa",
        message: "Lisa, can you check if the client has responded to our proposal?",
        time: new Date()
    }
                                        
]
chat.insertMany(chats);