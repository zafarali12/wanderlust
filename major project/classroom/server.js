const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require ("/routes/post.js");
const session = require("express-session");
app.use(session ({secret: "mysupersecretstring"}));

app.get("/test",(req,res) =>{
    res.send("test successful!");
});
app.listen(3000,()=>{
    console.log("servr is listening")
});
