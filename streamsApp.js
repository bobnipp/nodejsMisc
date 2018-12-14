'use strict';

//
// Streams
//

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/input.txt',
	{encoding: 'utf8',
	 highWaterMark: 512 });

var writeable = fs.createWriteStream(__dirname + '/output.txt');

var i = 1;
readable.on('data', function(chunk) {
	writeable.write('\n\n=========================== ' + i + ' ===============================\n\n');
	writeable.write(chunk);
	i = i+1;
});


// ------------------- using a pipe -----------------------

var readable2 = fs.createReadStream(__dirname + '/input.txt');
var writeable2 = fs.createWriteStream(__dirname + '/output2.txt');

readable2.pipe(writeable2);

// ------------------- zip it ---------------------

var compressed = fs.createWriteStream(__dirname + '/output.txt.gz');
var gzip = zlib.createGzip();
readable.pipe(gzip).pipe(compressed);  // method chaining...


