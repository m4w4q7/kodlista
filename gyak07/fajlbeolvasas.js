// https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback
var fs = require('fs');

// aszinkron fájlbeolvasás
fs.readFile('./gyak7/proba.js', function (err, data) {
	if (err) throw err;
	console.log(data.toString());
});
