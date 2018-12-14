//
// A new pattern for creating modules...
function Logger() {
	this.log2 = function(str) {
		console.log('LOG2: ' + str);
	}
}

module.exports = new Logger();