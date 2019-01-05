var express = require('express');
var app     = express();
var fs      = require("fs");

app.get('/fname', function (req, res) {
    res.end('greg')
})

app.get('/lname', function (req, res) {
    res.end('horne')
})

app.get('/', function (req, res) {
    res.end('app root')
})

var server = app.listen(3000, function () {
//    var host = server.address().address
   var env = process.env.APP_NAME;
   var host = '0.0.0.0';
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
   console.log("APP_NAME: " + env);
})

