var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	data = fs.readFileSync('index.html').toString();
	
 response.send(var);
});

dataport = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
