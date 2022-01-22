//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/apr", function(req, res){
    res.sendFile(__dirname + "/apr.html");
});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});

