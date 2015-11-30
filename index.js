var express = require('express');
var app = express();

app.get('/entry/:entryId', function(req, res) {

  var entries = {
    1: {
      firstName: "John",
      lastName: "One",
      emails: [{
        type: "home",
        address: "john@smith.com"
      }, {
        type: "work",
        address: "jsmith@megacorp.com"
      }]
    },
    2: {
      firstName: "John",
      lastName: "Two",
      emails: [{
        type: "home",
        address: "john@smith.com"
      }, {
        type: "work",
        address: "jsmith@megacorp.com"
      }]
    },
    3: {
      firstName: "John",
      lastName: "Three",
      emails: [{
        type: "home",
        address: "john@smith.com"
      }, {
        type: "work",
        address: "jsmith@megacorp.com"
      }]
    },

  };
  
  if (req.params.entryId <= Object.keys(entries).length) {
    res.json(entries[req.params.entryId]);
  }
  else {
    res.sendStatus(404);
  }
});






/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
