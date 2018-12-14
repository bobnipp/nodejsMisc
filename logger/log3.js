var config = require('./config.json');

var composeLogMsg = function(str) {
	return config.prefix + ' 3 : [' + str + ']';
}
var log3 = function(str) {
	console.log(composeLogMsg(str));
};

module.exports = {
	log3 : log3
}
//
// "Revealing Module Pattern" = only "log3" is exposed (everything else is private)
//