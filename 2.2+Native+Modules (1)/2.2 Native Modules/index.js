const fs = require("fs");
/*fs.writeFile("sample.txt","file created using node native module",(err)=>{
    if(err) throw err;
    console.log("file has been saved");
});*/

fs.readFile("sample.txt","utf8", (err,data)=> {
    if (err) throw err;
        console.log(data);
})