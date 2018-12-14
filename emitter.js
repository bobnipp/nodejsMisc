//
// Events testing...creating an emitter like Node's
//
function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];  // create it if needed
	this.events[type].push(listener);
};

Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		// invoke any listeners...
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = Emitter;