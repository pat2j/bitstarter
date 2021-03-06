var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
buf = new Buffer(256);

app.get('/', function(request, response) {
    buf = fs.readFileSync('index.html');
    response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
