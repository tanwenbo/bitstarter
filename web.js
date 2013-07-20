var express = require('express');
var app = express();

var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
    var fileData = fs.readFile('index.html').toString();

    response.send(fileData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
