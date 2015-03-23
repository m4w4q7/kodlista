// https://nodejs.org/api/http.html
var http = require('http');

var server = http.createServer(function(req, res) {
	//console.log(req);
	console.log(req.url);
	res.write("Hello vilag!");
	res.end();
});

server.listen(process.env.PORT, function() {
	console.log('Server started on port ', process.env.PORT);
});
