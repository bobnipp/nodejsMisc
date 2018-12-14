
var http = require('http');

http.createServer(function(req,res) {
	console.log(req.method + ': '+ req.url);

	res.writeHead(200,{'Content-Type' : 'text/json'});
	var result = {
		method: req.method,
		url: req.url
	}
	res.end(JSON.stringify(result));
}).listen(1337, '127.0.0.1');


