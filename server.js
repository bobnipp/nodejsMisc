var fs = require('fs');
var http = require('http');

http.createServer(function(req,res) {
	console.log(req.method + ': '+ req.url);

	res.writeHead(200,{'Content-Type' : 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
	res.end(html.replace('{message}','and this is the new stuff...'));

}).listen(1337, '127.0.0.1');


