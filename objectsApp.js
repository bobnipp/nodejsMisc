//
// Prototypal inheritance...
//
var logger = require('./logger');

logger.log('-------------------- NEW OBJECTS ---------------------');

// constructor
function Person(first,last) {
	this.first = first;
	this.last = last;
}

// Adding a method to the class...
Person.prototype.greet = function() {
	return 'hello ' + this.first + ' ' + this.last;
};

//
// Use "new" to create an object..
//
var john = new Person('John', 'Doe');

logger.log(john.first);
logger.log(john.greet());  // searches down the prototype chain for greet() because Person doesn't have it


var jane = new Person('Jane', 'Doe');
logger.log(jane.greet());


// use Object.create() to create a new object..
// NOTE:  Object.create() creates a new prototype, so <person>.greet() is NOT available
//
var jimmy = Object.create(Person);
jimmy.first = 'Jimmy';
jimmy.last = 'Doe';
//logger.log(jimmy.greet());


// ----------------------------------------------------------------
// pass by value or reference...
// ----------------------------------------------------------------
logger.log('--------------------- PASS BY REF/VALUE ---------------------');

function changePrimitiveVar(v) {
	v = 'updated test';
}
function changeObj(o) {
	o.x = 'updated FOO';
	o.y = 'updated BAR';
}

// primitives are passed by value...
var x = 'Original test';
changePrimitiveVar();
logger.log(x);

// objects are passed by reference...
var obj = { x : 'original FOO', y : 'original BAR'};
changeObj(obj);
logger.log(obj.x + ' / ' + obj.y);


//
// "Inherit"... basically places a prototype between two objects (making it a parent)
//
logger.log('--------------------- INHERITANCE ---------------------');
