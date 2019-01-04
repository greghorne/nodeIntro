var express = require('express');
var app = express();
var fs = require("fs");

app.get('/getdata', function (req, res) {
    res.end('greg horne')
})

var server = app.listen(3000, function () {
//    var host = server.address().address
   var host = '0.0.0.0';
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

