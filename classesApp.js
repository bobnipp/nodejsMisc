'use strict';

//
// a cleaner way to setup objects...
//
class Person {
	constructor(first,last) {
		this.first = first;
		this.last = last;
	}

	func() {
		console.log('Person: ' + this.first + ' ' + this.last);
	}
}

var p = new Person('jim','doe');
p.func();