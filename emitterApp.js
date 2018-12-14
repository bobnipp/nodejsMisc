'use strict';

//
// Use our home-built event emitter
//
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	// IMPORTANT:
	// a "super constructor"... pass the current object to the EventEmitter
	EventEmitter.call(this); 

	this.greeting = 'Hello';
}

// "links" Greeter with EventEmitter by adding it down the prototype chain
util.inherits(Greetr, EventEmitter);

// what's called when a 'greet' event is emitted...
Greetr.prototype.greet = function(data) {
	console.log(this.greeting);
	this.emit('greet', data);
};

// create the Greetr object and tell it what to do for a 'greet'...
var greeter1 = new Greetr();
greeter1.on('greet', function(data) {
	console.log('greetings emitted: ' + data);
});

// fire the event...
greeter1.greet('yo!');
