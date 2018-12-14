var fs = require('fs');
var http = require('http');

http.createServer(function(req,res) {
	console.log(req.method + ': '+ req.url);

	res.writeHead(200,{'Content-Type' : 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
	html = html.replace('{message}', 'and here\'s the real message...');
	res.end(html);

}).listen(1337, '127.0.0.1');


