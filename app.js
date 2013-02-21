var express = require('express');
var app = express(express.logger);

app.get('/hello.txt', function(req, res){
	var body = 'Hello world';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.get('/', function(req, res){
	var body = 'Hello world';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port);