// module for logging
//
// Notes:
// 		No need to wrap this in a IIFE, the 'require' wraps this in a function expression
//		index.js is included by default when using:  require(<dir>)

// module.exports is what is the require() function will return (and expose for this module)
module.exports = {
	log : require('./log').log,  // getting only the log() function
	logEval : require('./logEval'),  // getting everything exported in logEval
	log2 : require('./log2').log2,
	log3 : require('./log3').log3
};
