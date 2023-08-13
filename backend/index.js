const fetch = require("cross-fetch");
const express = require("express");

const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

//Requests here

app.use(function(req, res){
    res.status(404); 
    res.type('txt'); 
    res.send('404 - File '+req.url+' not found'); 
});

const listener = app.listen(3000, function () {
    console.log("The static server is listening on port " + listener.address().port);
});