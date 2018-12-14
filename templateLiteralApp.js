var str = 'hello';
function func() {
	return 'world';
}

// template literal...
var str2 = `${str} ${func()}`;

console.log(str2);