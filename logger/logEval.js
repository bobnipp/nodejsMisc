var config = require('./config.json');

var logEval = function(fn, args) {
	console.log(config.prefix + ': [' + fn(args) + ']');
};

module.exports = logEval;

//
// "Revealing Module Pattern" = only "logVal" is exposed (config is private)
//