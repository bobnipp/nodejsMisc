var util = require('util');

// function constructor for parent class
function Parent(first,last) {
	this.first = first;
	this.last = last;
}
// add a method to the parent
Parent.prototype.formatName = function() {
	console.log(this.last + ',' + this.first);
}

// Test out the parent object
var p = new Parent('jim','doe');
p.formatName();

// child object.  Parent is added to Child's prototype chain via "inherit"
function Child(first, last) {
	this.first = first;
	this.last = last;
}
util.inherits(Child, Parent);


// test out child
var c = new Child('joey','doe');
c.formatName();