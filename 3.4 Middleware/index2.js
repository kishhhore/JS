import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.urlencoded({extended : true}));

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit",(req,res)=>{
  const name = req.body.street;
  const petName = req.body.pet;
  const combination = `${name} ${petName}`;
  res.send(`band name is ${combination}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
