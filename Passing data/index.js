import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const TotalLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {TotalLetters});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
