var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send("<html><head><title>title</title></head><body><h1>Hellow Earl!</h1></body></html>");
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
