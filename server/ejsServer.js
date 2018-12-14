//
// ejs middleware example
// does templates for HTML (looks like JSP syntax - see index.ejs)
//

var express = require('express');
var bodyParser = require('body-parser');  // for parsing FORM bodys (POSTs)
var app = express();

// BodyParser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();


// Middleware for views
// ---------------------
// everytime we see /assets (see HTML), send in *static* files from the 'public' directory
// see http://expressjs.com/en/resources/middleware for middleware
console.log('Looking in /assets for static files...');
app.use('/assets', express.static(__dirname + '/public'));

// use EJS as template
console.log("using EJS as the view engine/middleware...");
app.set('view engine', 'ejs');

// Looks in "index" directory by default.  Adds view engine's extension ("ejs") to file
// given in render()
console.log('Looking for GET /person/:id ...');
app.get('/person/:id', function (req,res) {
	// get the URL params and query string...
	res.render('index', { ID: req.params.id, QueryStr : req.query.qstr } );
});

// Look for a POST from a form (in index.ejs)...
console.log('Looking for POSTs...');
app.post('/person', urlencodedParser, function(req, res) {
	console.log(req.body.firstname + ' ' + req.body.lastname);
	res.send('Got it!');
});
app.post('/personEndpoint', jsonParser, function(req, res) {
	console.log(req.body.firstname + ' ' + req.body.lastname);
	res.send('{}');
});


// kick off the server...
app.listen(3000);