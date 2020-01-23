const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Database = require('./database/Database.js');
const userLog = new Database('userLog.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    console.log(req.body);
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
    console.log(req.body);
});

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/script.js");
    console.log(req.body);
});

app.post("/data", (req, res) => {
    let userInput = req.body; // data is recieved in form of object
    let temp = userInput["temp"];
    console.log(temp); // extracted data form 'temp' field what we need
    let today =  new Date();
    let now = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ '-' + today.getHours() + ':' + today.getMinutes() ;
    userLog.add({userId : 1 , time : now , temp : temp })
    .then(data => res.send({status : 0 , message : "Successful"}))
    .catch(err => res.send(err));
    
});

app.listen(8080, () => {
    console.log("server running");
});