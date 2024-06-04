import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("<h1>hello</h1>");
});
app.get("/about",(req,res)=>{
    res.send("this is about page.")
})
app.put("/contact",(req,res)=>{
    res.sendStatus(200);
})
app.listen(2000,()=>{
    console.log("server 2000 is running");
});