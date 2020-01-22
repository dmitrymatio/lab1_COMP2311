const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
  console.log(req.body);
});

app.post("/data", (req, res) => {
  let userInput = req.body; // data is recieved in form of object
  let temp = userInput["temp"]; // extracted data form 'temp' field what we need
  console.log(temp);
  res.send("data sent successfully");
});

app.listen(8080, () => {
  console.log("server running");
});

//comment for testing merge
