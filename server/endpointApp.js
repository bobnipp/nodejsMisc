var http = require('http');

http.createServer(function(req,res) {
	console.log(req.method + ': '+ req.url);

	if (req.url === '/endpoint') {
		res.writeHead(200, {'Content-Type' : 'application/json'});
		var obj = {
			value1: 234234,
			value2: 'lsdkfjsldf',
			arr: [
				{x: 23, y: 32},
				{x: 32, y: 3},
				{x: 66, y: 2}
			]
		}

		res.end(JSON.stringify(obj));
	} else {
		res.writeHead(404);
		res.end();
	}

}).listen(1337, '127.0.0.1');


