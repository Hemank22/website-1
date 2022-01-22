//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
var Finance = require('financejs');
var finance = new Finance();





const app = express();

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/apr.html", function(req, res){
    res.sendFile(__dirname + "/apr.html");
});

app.post("/apr.html", function(req, res) {
    // console.log('Auth request recieved');
    const principal = Number(req.body.principal);
    const rate = Number(req.body.rate);
    const tp = Number(req.body.tp);
    const type = Number(req.body.type);
    // console.log("principal: " + req.body.principal);
    // console.log("tp: " + req.body.tp)
    // console.log("type: " + req.body.type)
    // console.log("rate: "+req.body.rate)
    // finance.AM(principal, rate, total number of payments, [type]);
    let APR = (finance.AM(principal, rate, tp, type));
    console.log("APR:" + APR)
    res.send("APR " + APR);
});








app.listen(3000, function(){
    console.log("server is running on port 3000");
});

