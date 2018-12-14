var config = require('./config.json');

module.exports.log = function(x) {
	console.log(config.prefix + ': [' + x + ']');
};

