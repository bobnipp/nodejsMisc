var express = require('express');
var app = express();

// ------------------ HTML ----------------------------

// Middleware...
// --------------
// everytime we see /assets (see HTML), send in *static* files from the 'public' directory
// see http://expressjs.com/en/resources/middleware for middleware
app.use('/assets', express.static(__dirname + '/public'));

// respond to 'GET's for HTML and JSON:
app.get('/', function (req,res) {
	res.send('<html> \
				<head> \
					<link href="assets/style.css" type="text/css" rel="stylesheet"/> \
				</head> \
				<body> \
					<h1>Here...</h1> \
				</body> \
			</html>')
});


// --------------------- endpoint ---------------------

app.get('/json', function (req,res) {
	var obj = {
		one: '1111',
		two: '2222222',
		three: '3333333'
	};
	res.json(obj)
});

// routes & parameters (':id')
var users = [
	{ id: 0, first: 'Jim', last: 'Smith'},
	{ id: 1, first: 'Bob', last: 'Johnson'},
	{ id: 2, first: 'Fred', last: 'Jones'},
]
app.get('/user/:id', function (req,res) {
	res.json( users[req.params.id] );
});


app.listen(3000);