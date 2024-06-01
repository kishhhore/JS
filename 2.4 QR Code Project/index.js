/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
/*const fs = require("fs");
fs.writeFile("QR Generator.txt","Web links",(err)=>{
    if (err) throw err;
    console.log("file has been saved.");
});*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([{
    message:"Enter the URL...",
    name:"URL",
  }])
  .then((answers) => {
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('Image.png'));
    fs.writeFile("data.txt",answers.URL,(err)=>{
      if (err) throw err;
    })    
  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
      "Something else went wrong"
    }
  });



