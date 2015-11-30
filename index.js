var express = require('express');
var app = express();

app.get('/op/:operation/:number1/:number2', function(req, res) {

  var solution = 'default';

  if (req.params.operation === "add") {
    solution = Number(req.params.number1) + Number(req.params.number2);

  }
  else if (req.params.operation === "sub") {
    solution = Number(req.params.number1) - Number(req.params.number2);

  }
  else if (req.params.operation === "mult") {
    solution = Number(req.params.number1) * Number(req.params.number2);
  }
  else if (req.params.operation === "div") {
    solution = Number(req.params.number1) / Number(req.params.number2);
  }



  if (solution !== "default") {
    res.send(solution.toString());
    

  }
  else {
    res.sendStatus(404);
  }
  
  var jsonObj = {
      operator: req.params.operation,
      firstOperand: req.params.number1,
      secondOperand: req.params.number2,
      solution: solution
    };

    res.json(jsonObj);

});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
