//
// (function() {..}()) is an imediately invoked function expression (IIFE).  The function is created
// and then immediately invoked...all wrapped in an expression.  Purpose is to create a scope.
(function(value) {
	//
	// modules (logger.js)
	// Function constructors (passing functions as params)
	//
	var logger = require('./logger');

	var outOfScopeVar = 'testing';

	var addemup = function(a,b) {
		return a + b;
	};

	logger.log('this is a test');
	logger.log(addemup(3,5));
	logger.logEval( 
		function(args) {
			return args[0] + args[1];
		},
		[30,10]);

	logger.log('value passed to IIFE is: ' + value);

	logger.log2('TESTING...');
	logger.log3('TESTING...');
}('some value'));

if (typeof outOfScopeVar !== 'undefined') {
	console.log("NOPE...");
} else {
	console.log("yasss....");
}
