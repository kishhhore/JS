//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname,join} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.urlencoded({extended : true }));

app.listen(2000,()=>{
    console.log("listening at port 2000");
});


app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,"public","index.html"));
});

app.post("/check",(req,res)=>{
    const text = req.body.password;
    if(text === "ILoveProgramming"){
        res.sendFile(join(__dirname,"public","secret.html"));
    }
    else {
        res.sendFile(join(__dirname,"public","index.html"));
    }
});










