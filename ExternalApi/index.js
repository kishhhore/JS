import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));

/*app.get("/", (req,res)=>{
    res.render("index.ejs", {
      secret: "random secret ",
      user : "unknown"  
    })
});

/*const config = {
    headers : {
        authorization : 
    }
}*/


app.get("/", async (req,res)=>{
    const request = await axios.get( "https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
        secret : request.data.secret ,
        user : request.data.username, 
    } );
})

app.listen(port, () => {
    console.log("server running at port 3000");
});




// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
