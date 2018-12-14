'use strict';

var obj = {
	name: 'Jimmy',
	greet: function(param1, param2, param3) {
		console.log(`hello ${this.name} ${param1}/${param2}/${param3}`);
	}
}

// call normally...
obj.greet('ABC', 'XYZ', 'DEF');

// overwrite what 'this' points to.  call() and apply() do the
// same thing but handle parameters differently
obj.greet.call( {name: 'Sally'}, 'ABC', 'XYZ', 'DEF' );
obj.greet.apply( {name: 'Sally'}, ['ABC', 'XYZ', 'DEF'] );