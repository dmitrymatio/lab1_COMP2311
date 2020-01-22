const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) => {

    res.send("hello world");
    console.log(req.body);
})

app.post('/data', (req,res) => {
    //let input = req.query;
    console.log(req.body);
    //res.json({"hello world": "hi"});
    //console.log(input);
    res.send("data sent successfully")
})

app.listen(8080, () => {
    console.log("server running");
})