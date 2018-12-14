'use strict';

var fs = require('fs');

var f = fs.stat(__dirname + '/jsconfig.json', function(err,stats) {
	console.log(stats);
});

