import express from "express";

const app = express();
app.listen(5000,(req,res)=>{
    console.log("server is running at port 5000."); 
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        day: today
    })
})


const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let today = days[d.getDay()];





