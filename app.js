var express = require('express');
var app     = express();


app.get('/fname', function (req, res) {
    res.end('greg')
});

app.get('/lname', function (req, res) {
    res.end('horne')
});

app.get('/client', function (req, res) {
    console.log(req.query.fname);
    console.log(req.query.lname);
    res.end(req.query.lname + ", " + req.query.fname)
});

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.end('app root');
});

var server = app.listen(3000, function () {

   var env = process.env.APP_NAME;
//    var host = server.address().address
   var host = '0.0.0.0';
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
   console.log("APP_NAME: " + env);
})

